import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import chef from '~/assets/chef.svg';

export const Container = styled.div`
  width: 100%;
  color: white;
  padding: 18px;
  min-height: 80vh;
`;

export const Dishes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Frame = styled.div`
  width: 800px;
  height: 50%;
  background-image: url(${chef});
  background-color: white;
`;
