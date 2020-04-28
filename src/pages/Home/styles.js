import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.background};
  color: ${props => props.theme.secondary};
`;
