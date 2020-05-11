import React, { useEffect, useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '~/components/Button';
import Headline from '~/components/Headline';
import Dish from '~/components/Dish';
import { Container, Dishes } from './styles';
import { useShop } from '~/contexts/ShopContext';
import api from '../../services/api';

export default function Search() {
  const [dishes, setDishes] = useState([]);
  const { search } = useLocation();
  const history = useHistory();
  const [, shopDispatch] = useShop();

  const handleOrder = dish => event => {
    shopDispatch({ type: 'addOneToCart', payload: dish });
    history.push('/cart');
  };

  const handleCart = dish => event => {
    shopDispatch({ type: 'addOneToCart', payload: dish });
  };

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await api.get(`/dishes${search}`);
      setDishes(data);
    };
    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Headline>
        Escolha a sua <span>Refeição</span>
      </Headline>
      <Dishes>
        {dishes.map(dish => (
          <Dish
            key={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={`http://prattu-api.herokuapp.com${dish.photo}`}
            link={`/dishes/${dish.id}`}
          >
            <Button
              startIcon={<AddShoppingCartIcon />}
              onClick={handleOrder(dish)}
              color="black"
              textColor="white"
            >
              Comprar
            </Button>
          </Dish>
        ))}
      </Dishes>
    </Container>
  );
}
