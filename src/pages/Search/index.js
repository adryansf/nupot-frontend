import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Headline from '../../components/Headline';
import Dish from './Dish';
import { Container, Dishes } from './styles';
import api from '../../services/api';

export default function Search() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await api.get('/dishes');
      setDishes(data);
      console.log(data);
    };
    fetchDishes();
  }, []);

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
