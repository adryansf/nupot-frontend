import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: ${({ theme }) => theme.grays.dark};
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  bottom: 0;
  width: 100%;

  a.logo {
    display: flex;
    align-items: center;
    color: ${props => props.theme.secondary};

    svg {
      color: ${props => props.theme.primary};
      font-size: 30px;
      margin-right: 10px;
    }
  }

  small {
    display: flex;
    padding-top: 3px;
    font-size: 0.8em;
    color: ${props => props.theme.secondary};
    svg {
      margin: 0px 5px;
    }
  }
`;
