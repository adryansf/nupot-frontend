import React from 'react';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <div className="intro-text">
        <h1>Saia De <span>CASA</span> </h1>
        <h2>Mas Fique Na <span>Dieta !</span> </h2>
        <p>
        Refeições e bebidas com descrição nutricional. Sugestões de cardápios, 
        agendamentos de pedidos e reserva de mesa, testamos o seu perfil nutricional.
        </p>
      </div>
    </Container>
  );
}
