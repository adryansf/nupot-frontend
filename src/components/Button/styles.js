import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: ({ color }) => color,
      color: ({ textColor }) => textColor,
      '&:hover': {
        backgroundColor: ({ color }) => color,
      },
    },
  };
});

export default useStyles;
