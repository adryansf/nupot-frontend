import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ mobile, isVisibility }) =>
    mobile ? (isVisibility ? 'flex' : 'none') : 'flex'};
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  align-items: center;

  width: ${({ mobile }) => (mobile ? '100%' : 'auto')};

  a {
    margin: 10px;
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
    font-size: 18px;
    opacity: 0.6;
    transition: all 0.5s;

    &:hover {
      opacity: 1;
    }
  }
`;
