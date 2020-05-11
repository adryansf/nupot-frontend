import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const MyButton = props => {
  const { color, textColor, ...rest } = props;
  const { root } = useStyles({ color, textColor });
  return <Button className={root} {...rest} />;
};

export default MyButton;
