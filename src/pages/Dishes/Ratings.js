import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';

export default props => {
  const { ratings = [] } = props;
  return (
    <List>
      <ListSubheader>O que as pessoas dizem:</ListSubheader>
      {ratings.map((rating, index) => (
        <>
          {index !== 0 && <Divider />}
          <ListItem key={rating.id}>
            <ListItemAvatar>
              <Avatar
                src={`https://api.adorable.io/avatars/285/${rating.name}`}
              />
            </ListItemAvatar>
            <ListItemText>
              <Typography>{rating.name}:</Typography>
              <Typography>{rating.comment}</Typography>
            </ListItemText>
          </ListItem>
        </>
      ))}
    </List>
  );
};
