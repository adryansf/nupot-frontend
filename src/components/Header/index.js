import React, { useState, useEffect } from 'react';
import { GiFoodTruck as Logo } from 'react-icons/gi';
import { FaBars, FaAngleDown } from 'react-icons/fa';

// Components
import Nav from '../Nav';

// Styles
import { Container } from './styles';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    window.addEventListener('resize', setWidth(window.screen.width));
  }, []);

  return (
    <Container>
      <div className="logo">
        <Logo />
        <h1>PRATTU</h1>
      </div>
      {width < 768 && (
        <button
          id="toggle"
          type="button"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          {isNavActive ? <FaAngleDown /> : <FaBars />}
        </button>
      )}
      <Nav screenWidth={width} isNavActive={isNavActive} />
    </Container>
  );
}
