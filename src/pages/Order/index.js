import React from 'react';

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
