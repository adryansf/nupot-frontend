import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    background: 'papayawhip',
    margin: '12px auto',
    padding: '12px',
  },
  price: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    maxWidth: '120px',
    margin: '15px 0',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100px',
    },
  },
  img: {
    height: '130px',
    width: '200px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '12px',
    [theme.breakpoints.down('sm')]: {
      height: '85px',
      width: '130px',
    },
  },
  last: {
    marginTop: '24px',
  },
}));

export default useStyles;
