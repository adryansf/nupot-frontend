import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const FormContainer = styled(Paper)`
  max-width: 360px;
  padding: 24px;
`;

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 80vh;
`;

export const InfoContainer = styled.div`
  color: white;
`;

export const Label = styled.label`
  border: black dashed 1px;
  display: block;
  min-height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 15px;
  margin: 12px;
  cursor: pointer;
  font-size: 2em;
`;
