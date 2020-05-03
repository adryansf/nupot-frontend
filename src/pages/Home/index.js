import React from 'react';
// import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>
        Saindo de casa ou não, <span>coma bem!</span>
      </h1>
      <p>Lorem ipsum dolor amet.</p>

      <Link to="/search">Pesquisar por pratos</Link>
    </Container>
  );
}
