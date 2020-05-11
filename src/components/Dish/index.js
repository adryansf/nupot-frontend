import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';
import dishPlaceholder from '~/assets/dish-placeholder.png';

const useStyles = makeStyles({
  actions: {
    display: 'block',
  },
  card: {
    minWidth: '300px',
    maxWidth: '345px',
    margin: '12px',
    background: 'rgba(255, 230, 180, 0.9)',
  },
});

export default function Dish(props) {
  const { name, link, description, price, image, children } = props;
  const { actions, card } = useStyles();
  return (
    <Card className={card}>
      <CardMedia component="img" height="240" image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <Typography variant="body1" color="textPrimary" component="p">
          R${price.toFixed(2).toString().replace('.', ',')}
        </Typography>
        {link && (
          <Link to={link} style={{ lineHeight: 2.5 }}>
            Ver mais detalhes
          </Link>
        )}
      </CardContent>
      <CardActions className={actions}>{children}</CardActions>
    </Card>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
};

Dish.defaultProps = {
  description: null,
  children: null,
  image: dishPlaceholder,
  link: false,
};
