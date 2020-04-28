import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Nav({ screenWidth, isNavActive }) {
  return (
    <Container mobile={screenWidth < 768} isVisibility={isNavActive}>
      <Link to="/meals">Refeições</Link>
      <Link to="/">Cardápios</Link>
      <Link to="/">Cadastra-se</Link>
      <Link to="/">Login</Link>
    </Container>
  );
}

Nav.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  isNavActive: PropTypes.bool.isRequired,
};
