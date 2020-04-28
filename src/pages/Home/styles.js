import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  color: ${props => props.theme.secondary};
`;
