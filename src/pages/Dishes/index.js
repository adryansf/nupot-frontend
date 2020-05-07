import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Dish from './Dish';
import Ratings from './Ratings';
import { Container, RelatedContentContainer, RatingsContainer } from './styles';

import api from '../../services/api';
// placeholder data
import { fakeRatings, fakeDish } from './constants';

export default function MyKitchen() {
  const location = useLocation();
  console.log(Location);
  const [dish, setDish] = useState(fakeDish);
  useEffect(() => {
    const fetchDish = async () => {
      const { data } = await api.get(`/dishes/2`);
      setDish(data);
    };
    fetchDish();
  }, []);
  return (
    <Container>
      <RelatedContentContainer>
        <h1>Veja também</h1>
      </RelatedContentContainer>
      <Dish
        key={dish.id}
        name={dish.name}
        description={dish.description}
        price={dish.price}
        image={dish.image}
      />
      <RatingsContainer>
        <Ratings ratings={fakeRatings} />
      </RatingsContainer>
    </Container>
  );
}
