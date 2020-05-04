import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.secondary};
  text-align: center;
  line-height: 1;

  h1 {
    font-size: 4em;
  }

  h2 {
    font-size: 6em;
  }

  p {
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
    background-color: #34c759;
    border-radius: 43px;
    margin: 15px 0px 0px;
    padding: 12px 30px;
    line-height: 30px;
    color: #fff;
  }

  @media (max-width: 640px) {
    h1 {
      font-size: 3em;
    }

    h2 {
      font-size: 3.2em;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 2em;
    }

    p {
      font-size: 1em;
    }
  }
`;

export const PresentationContainer = styled.div`
  margin: 30px;
`;
