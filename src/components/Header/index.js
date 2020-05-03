import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { GiFoodTruck as Logo } from 'react-icons/gi';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import { getLinks } from './constants';
import { useAuth } from '~/contexts/AuthContext';

// Components
import Nav from '../Nav';

// Styles
import { Container } from './styles';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [signed, setSigned] = useAuth();
  const links = getLinks(signed);
  const history = useHistory();

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem('accessToken');
    setSigned(false);
    history.push('/');
  };

  useEffect(() => {
    window.onresize = () => setWidth(window.innerWidth);
  }, []);

  return (
    <Container>
      <Link className="logo" to="/">
        <Logo />
        <h1>PRATTU</h1>
      </Link>
      {width < 768 && (
        <button
          id="toggle"
          type="button"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          {isNavActive ? <FaAngleDown /> : <FaBars />}
        </button>
      )}
      <Nav screenWidth={width} isNavActive={isNavActive} links={links} />
      {signed && (
        <Button color="secondary" onClick={handleLogout}>
          Sair
        </Button>
      )}
    </Container>
  );
}
