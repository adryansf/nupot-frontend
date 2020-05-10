import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dish from './Dish';
import Ratings from './Ratings';
import { Container, RelatedContentContainer, RatingsContainer } from './styles';

import api from '../../services/api';
// placeholder data
import { fakeRatings, fakeDish } from './constants';

export default function MyKitchen() {
  const params = useParams();
  const { dishId } = params;
  const [dish, setDish] = useState(fakeDish);
  useEffect(() => {
    const fetchDish = async () => {
      const { data } = await api.get(`/dishes/${dishId}`);
      setDish(data);
    };

    fetchDish();
  }, [dishId]);
  return (
    <Container>
      <RelatedContentContainer>
        <h1>Veja também</h1>
      </RelatedContentContainer>
      <Dish
        id={dish.id}
        name={dish.name}
        description={dish.description}
        price={dish.price}
        image={`http://prattu-api.herokuapp.com/${dish.photo}`}
      />
      <RatingsContainer>
        <Ratings ratings={fakeRatings} />
      </RatingsContainer>
    </Container>
  );
}
