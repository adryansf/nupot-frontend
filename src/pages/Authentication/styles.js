import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const FormContainer = styled(Paper)`
  max-width: 360px;
  padding: 24px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 12px;

  h1 {
    margin: 12px 0;
  }

  a {
    margin: 24px 0;
  }
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  min-height: 80vh;
`;

export const Illustration = styled.img`
  width: 50%;
  max-width: 600px;
  height: auto;
  @media (max-width: 400px) {
    display: none;
  }
`;
