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

const avatarRadius = '60px';
export default makeStyles({
  drawerPaper: {
    padding: '12px',
    backgroundColor: 'palegoldenrod',
  },
  avatar: {
    width: avatarRadius,
    height: avatarRadius,
    margin: '30px',
  },
  openDrawerButton: {
    position: 'fixed',
    left: '6px',
    top: '50%',
    padding: 0,
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});
