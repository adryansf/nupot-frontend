import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { GiFoodTruck as Logo } from 'react-icons/gi';

import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <Link className="logo" to="/">
        <Logo />
        <h3>PRATTU</h3>
      </Link>
      <small>
        © Made with <FaHeart color="red" /> by PRATTU
      </small>
    </Container>
  );
}
