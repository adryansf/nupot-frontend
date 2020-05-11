import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dish from '~/components/Dish';
import Ratings from './Ratings';
import { Container, RelatedContentContainer, RatingsContainer } from './styles';
import { useShop } from '~/contexts/ShopContext';

import api from '../../services/api';
// placeholder data
import { fakeRatings, fakeDish } from './constants';

export default function MyKitchen() {
  const params = useParams();
  const { dishId } = params;
  const [dish, setDish] = useState(fakeDish);

  const history = useHistory();
  const [, shopDispatch] = useShop();

  const handleOrder = dish => event => {
    shopDispatch({ type: 'addOneToCart', payload: dish });
    history.push('/cart');
  };

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
        name={dish.name}
        description={dish.description}
        price={dish.price}
        image={dish.photo}
      >
        <Button onClick={handleOrder(dish)}>Compre já</Button>
      </Dish>
      <RatingsContainer>
        <Ratings ratings={fakeRatings} />
      </RatingsContainer>
    </Container>
  );
}
