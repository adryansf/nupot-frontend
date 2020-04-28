import React from 'react';

// Meals
import Food1 from '~/assets/food1.png';

// Components
import ListMeals from '~/components/ListMeals';

import { Container } from './styles';

export default function Meals() {
  const data = [
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
    {
      name: 'Featured Meal',
      description:
        'Choice of: Coke, Fanta, Sprite, Upgrade to large fries, Add whopper patty, Add Tender crisp patty and more...',
      image: Food1,
      stars: 5,
    },
  ];

  return (
    <Container>
      <div className="titles">
        <h2>Escolha a sua</h2>
        <h1>Refeição</h1>
        <span />
      </div>
      <ListMeals data={data} />
      <div className="btn-profile">
        <button
          type="button"
          onClick={() => {
            //
          }}
        >
          Descubra seu Perfil Nutricional
        </button>
      </div>
    </Container>
  );
}
