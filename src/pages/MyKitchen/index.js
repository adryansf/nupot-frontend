import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Dish from './Dish';
import { Container, Dishes } from './styles';

// placeholder data
import { dish } from './constants';

let dishes = Array(10).fill(dish);
dishes = dishes.map((dish, index) => ({ ...dish, id: index }));

export default function MyKitchen() {
  return (
    <Container>
      <Drawer variant="permanent">
        <Avatar />
        <h2>Nome do restaurante</h2>
        <p>Entregas</p>
        <p>Meus Pratos</p>
        <Link to="/dish/new">
          <Button>Adicionar Novo Prato</Button>
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
