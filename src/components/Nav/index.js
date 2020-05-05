import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function Nav({ screenWidth, isNavActive, links }) {
  return (
    <Container mobile={screenWidth < 1170} isVisibility={isNavActive}>
      {links.map((link, index) => (
        <Link key={index} to={link.to}>
          {link.label}
        </Link>
      ))}
    </Container>
  );
}

Nav.propTypes = {
  screenWidth: PropTypes.number.isRequired,
  isNavActive: PropTypes.bool.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, to: PropTypes.string })
  ),
};

Nav.defaultProps = {
  links: [],
};
