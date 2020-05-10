import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import Dish from './Dish';
import useStyles, { Container, Dishes } from './styles';
import { menuItems } from './constants';
import api from '../../services/api';

export default function MyKitchen() {
  const classes = useStyles();
  const [myDishes, setMyDishes] = useState([]);
  const [kitchenName, setKitchenName] = useState('');

  const handleDeletion = id => {
    setMyDishes(myDishes.filter(dish => dish.id !== id));
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
        setMyDishes(data.dishes);
        setKitchenName(data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDishes();
  }, []);

  return (
    <Container>
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <Avatar className={classes.avatar} />
        <h2>{kitchenName}</h2>
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
      <Dishes>
        {myDishes.map(dish => (
          <Dish
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={`http://prattu-api.herokuapp.com${dish.photo}`}
            id={dish.id}
            onDelete={handleDeletion}
          />
        ))}
      </Dishes>
    </Container>
  );
}
