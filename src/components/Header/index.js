import React, { useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link, useHistory } from 'react-router-dom';
import { GiFoodTruck as Logo } from 'react-icons/gi';
import { FaBars, FaAngleDown, FaSearch } from 'react-icons/fa';
import { links } from './constants';
import { useAuth } from '~/contexts/AuthContext';

// Components
import Nav from '../Nav';
import SearchBar from './SearchBar';

// Styles
import useStyles, { Container } from './styles';

export default function Header() {
  const [isNavActive, setIsNavActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [signed, setSigned] = useAuth();
  const history = useHistory();
  const classes = useStyles();

  const getRole = () => {
    if (!signed) return 'Anonimous';
    const token = localStorage.getItem('accessToken');
    const { roles } = jwt.decode(token);
    if (roles.includes('kitchen')) return 'Kitchens';
    return 'Consumers';
  };

  const forUser = `for${getRole()}`;

  const handleLogout = event => {
    event.preventDefault();
    localStorage.removeItem('accessToken');
    setSigned(false);
    history.push('/');
  };

  useEffect(() => {
    window.onresize = () => setWidth(window.innerWidth);
  }, []);

  const SearchButton = (
    <IconButton type="submit">
      <FaSearch size={16} />
    </IconButton>
  );

  return (
    <Container>
      <Link className="logo" to="/">
        <Logo />
        <h1>PRATTU</h1>
      </Link>
      <SearchBar
        endAdornment={SearchButton}
        placeholder="O que você quer comer?"
        className={classes.searchBar}
      />
      {width < 768 && (
        <button
          id="toggle"
          type="button"
          onClick={() => setIsNavActive(!isNavActive)}
        >
          {isNavActive ? <FaAngleDown /> : <FaBars />}
        </button>
      )}
      <Nav
        screenWidth={width}
        isNavActive={isNavActive}
        links={links[forUser]}
      />
      {signed && (
        <Button color="secondary" onClick={handleLogout}>
          Sair
        </Button>
      )}
    </Container>
  );
}
