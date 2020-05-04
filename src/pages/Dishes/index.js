import React from 'react';

import Dish from './Dish';
import { Container } from './styles';

// placeholder data
import { fakeDish } from './constants';

export default function MyKitchen() {
  return (
    <Container>
      <Dish
        key={fakeDish.id}
        name={fakeDish.name}
        description={fakeDish.description}
        price={fakeDish.price}
        image={fakeDish.image}
      />
    </Container>
  );
}
