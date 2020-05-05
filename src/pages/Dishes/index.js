import React from 'react';

import Dish from './Dish';
import Ratings from './Ratings';
import { Container, RelatedContentContainer, RatingsContainer } from './styles';

// placeholder data
import { fakeDish, fakeRatings } from './constants';

export default function MyKitchen() {
  return (
    <Container>
      <RelatedContentContainer>
        <h1>Veja também</h1>
      </RelatedContentContainer>
      <Dish
        key={fakeDish.id}
        name={fakeDish.name}
        description={fakeDish.description}
        price={fakeDish.price}
        image={fakeDish.image}
      />
      <RatingsContainer>
        <Ratings ratings={fakeRatings} />
      </RatingsContainer>
    </Container>
  );
}
