import styled from 'styled-components';
import background from '~/assets/background.png';

export const Container = styled.div`
  background-image: url("${background}");
  background-size: cover;
  background-position: top;
  min-height: 100vh;
`;
