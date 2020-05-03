import React from 'react';
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

// placeholder data
import { fakeDish } from './constants';

let dishes = Array(10).fill(fakeDish);
dishes = dishes.map((item, index) => ({ ...item, id: index }));

export default function MyKitchen() {
  const classes = useStyles();
  return (
    <Container>
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        <Avatar className={classes.avatar} />
        <h2>Nome do restaurante</h2>
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
        {dishes.map(dish => (
          <Dish
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={dish.image}
          />
        ))}
      </Dishes>
    </Container>
  );
}
