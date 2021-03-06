import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import OpenIcon from '@material-ui/icons/ChevronRight';
import Dish from '~/components/Dish';
import useStyles, { Container, Dishes } from './styles';
import { menuItems } from './constants';
import api from '../../services/api';

export default function MyKitchen() {
  const classes = useStyles();
  const [myDishes, setMyDishes] = useState([]);
  const [open, setOpen] = useState(false);
  const [kitchen, setKitchen] = useState({});

  const handleDeletion = id => event => {
    const destroyDish = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const { status } = await api.delete(`/dishes/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (status === 204) {
          setMyDishes(myDishes.filter(dish => dish.id !== id));
        }
      } catch (error) {
        console.error(error);
      }
    };
    destroyDish();
  };

  useEffect(() => {
    const fetchDishes = async () => {
      const token = localStorage.getItem('accessToken');
      try {
        const { data } = await api.get('/my_kitchen', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const { dishes, ...kitchen } = data;
        setMyDishes(dishes);
        setKitchen(kitchen);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDishes();
  }, []);

  return (
    <Container>
      <Button
        className={classes.openDrawerButton}
        onClick={() => setOpen(!open)}
        variant="text"
      >
        <OpenIcon color="primary" />
      </Button>
      <Drawer
        variant="temporary"
        open={open}
        onClose={() => setOpen(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <Avatar className={classes.avatar} src={kitchen.avatar} />
        <h2>{kitchen.name}</h2>
        <Divider />
        <List>
          {menuItems.map(item => (
            <ListItem button key={item.key}>
              {/* <ListItemIcon>{}</ListItemIcon> */}
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Link to="/dish/new">
          <Button color="primary">Adicionar Novo Prato</Button>
        </Link>
      </Drawer>

      {myDishes.map(dish => (
        <Dish
          key={dish.id}
          name={dish.name}
          description={dish.description}
          price={dish.price}
          image={dish.photo}
        >
          <Button
            color="secondary"
            onClick={handleDeletion(dish.id)}
            startIcon={<DeleteIcon />}
          >
            Deletar
          </Button>
        </Dish>
      ))}
    </Container>
  );
}
