import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.secondary};

  .intro-text {
    text-align: center;
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

  a {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    background-color: #34C759;
    border-radius: 43px;
    margin: 15px 0px 0px;
    padding: 12px 30px;
    line-height: 30px;
    color: #fff;
  }

  @media (max-width: 640px) {
    .intro-text h1 {
      font-size: 3em;
    }

    .intro-text h2 {
      font-size: 3.2em;
    }
  }

  @media (max-width: 320px) {
    .intro-text h1 {
      font-size: 2.3em;
    }

    .intro-text h2 {
      font-size: 2em;
    }

    .intro-text p {
      font-size: 1em;
    }
  }
  }
`;
