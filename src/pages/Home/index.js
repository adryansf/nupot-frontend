import React from 'react';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>
        Saindo ou não de casa, <span>coma bem!</span>
      </h1>
      <p>
        Sugestão de cardápios, descrição nutricional, agendamento de pedidos,
        reserva de mesa e cuidado no preparo do seu alimento.
      </p>

      <Link to="/search">Pesquisar por pratos</Link>
    </Container>
  );
}
