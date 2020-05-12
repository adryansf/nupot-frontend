import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import chef from '~/assets/chef.svg';

export const Container = styled.div`
  width: 100%;
  color: white;
  display: flex;
  flex-wrap: wrap;
`;

export const Dishes = styled(Paper)`
  position: absolute;
  margin: 12px 36px;
  padding: 12px;
  right: 0;
  height: 80vh;
  background: white;
  width: 1150px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
`;

export const Frame = styled.div`
  width: 800px;
  height: 50%;
  background-image: url(${chef});
  background-color: white;
`;

const avatarRadius = '150px';
export default makeStyles({
  drawerPaper: {
    padding: '12px',
    backgroundColor: 'palegoldenrod',
    minWidth: '300px',
  },
  avatar: {
    width: avatarRadius,
    height: avatarRadius,
    margin: '30px auto',
  },
  openDrawerButton: {
    position: 'fixed',
    left: '-45px',
    top: '45%',
    padding: 0,
    height: '200px',
    borderRadius: '0 12px 12px 0',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    transition: 'all 0.3s ease',

    '&:hover': {
      left: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      transition: 'all 0.3s ease',
    },
  },
});
