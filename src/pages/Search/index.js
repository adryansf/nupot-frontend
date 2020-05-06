import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Headline from '../../components/Headline';
import Dish from './Dish';
import { Container, Dishes } from './styles';

// placeholder data
import { fakeDish } from './constants';

let dishes = Array(10).fill(fakeDish);
dishes = dishes.map((item, index) => ({ ...item, id: index }));

export default function Search() {
  return (
    <Container>
      <Headline>
        Escolha a sua <span>Refeição</span>
      </Headline>
      <Dishes>
        {dishes.map(dish => (
          <Dish
            key={dish.id}
            id={dish.id}
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
