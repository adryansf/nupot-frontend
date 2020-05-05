import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PitchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 100px;

  h3 {
    font-size: 2em;
  }
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
  align-items: center;
  color: ${props => props.theme.secondary};
  text-align: center;
  line-height: 2;

  h1 {
    font-size: 4em;
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
