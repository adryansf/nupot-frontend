import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  div.titles {
    display: flex;
    flex-direction: column;

    h2 {
      color: ${({ theme }) => theme.secondary};
      position: relative;
      font-size: 2em;
      letter-spacing: 0.2em;
    }

    h1 {
      color: ${({ theme }) => theme.contrast};
      margin-left: 15%;
      font-size: 3em;
      letter-spacing: 0.2em;
      text-shadow: 1px 1px 1px black;

      &::after {
        margin-top: 5px;
        content: ' ';
        display: block;
        height: 2px;
        width: 50px;
        background: ${({ theme }) => theme.primary};
      }
    }
  }

  div.btn-profile {
    display: flex;
    justify-content: center;
    margin-top: 50px;

    button {
      padding: 20px;
      background: ${({ theme }) => theme.primary};

      color: ${({ theme }) => theme.black};
      font-size: 1.2em;
      letter-spacing: 0.2em;
      text-align: center;
      font-weight: bold;

      border: 0;
      border-radius: 40px;
    }
  }
`;
