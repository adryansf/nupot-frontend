import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    background: 'papayawhip',
    margin: '12px auto',
    padding: '12px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    maxWidth: '120px',
  },
  img: {
    height: '130px',
    width: '200px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '12px',
  },
});

export default useStyles;
