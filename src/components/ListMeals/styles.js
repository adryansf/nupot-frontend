import styled from 'styled-components';

export const Container = styled.div`
  div.slick-slide {
    padding: 10px;
    cursor: pointer;
  }
`;

export const Meal = styled.div`
  width: 297px;
  img {
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  div {
    padding: 15px;
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.grays.dark};

    h2 {
      margin-bottom: 20px;
      font-size: 2em;
    }

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3; /* number of lines to show */
      -webkit-box-orient: vertical;
      text-align: justify;
      font-size: 0.9em;
      color: ${({ theme }) => theme.grays.light};
    }

    span {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 10px;

      span {
        display: flex;
        margin: 10px 0px;

        svg {
          color: #f9ad3d;
          font-size: 1.3em;
        }
      }

      button {
        padding: 5px;
        height: 33px;
        width: 85px;

        color: ${({ theme }) => theme.grays.dark};
        font-size: 0.7em;
        letter-spacing: 0.2em;
        text-align: center;
        font-weight: bold;

        border: 0;
        border-radius: 10px;

        background: ${({ theme }) => theme.primary};

        text-transform: uppercase;
      }
    }
  }
`;
