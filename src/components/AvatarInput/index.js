import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUploadRounded';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';

const AvatarInput = props => {
  const { children, onChange, image } = props;
  const classes = useStyles();

  return (
    <label className={classes.root}>
      <Avatar src={image} className={classes.avatar}>
        <CloudUploadIcon className={classes.icon} />
      </Avatar>
      {children}

      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </label>
  );
};

export default AvatarInput;
