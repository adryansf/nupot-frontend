import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  color: ${props => props.theme.secondary};

  .intro-text {
    text-align: center;
    transform: translate(0, 20em);
    line-height: 1;
  }

  .intro-text h1 {
    font-size: 4em;
  }

  .intro-text h2 {
    font-size: 6em;
  }

  .intro-text p {
    font-size: 1.5em;
    display: inline-block;
    padding: 10px;
    width: 50%;
    line-height: 1.1;
  }
`;
