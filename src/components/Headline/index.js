import React from 'react';
import styled from 'styled-components';

const styledText = styled.h1`
  font-size: 1.5em;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.secondary};

  span {
    display: block;
    color: ${({ theme }) => theme.contrast};
    margin-left: 1em;
    font-size: 2em;
    letter-spacing: 0.2em;
    text-shadow: 1px 1px 1px black;

    &::after {
      margin-top: 5px;
      content: ' ';
      display: block;
      height: 2px;
      width: 50px;
      background: ${({ theme }) => theme.primary};
    }
  }
`;

export default styledText;
