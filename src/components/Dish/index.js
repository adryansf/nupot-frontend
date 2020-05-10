import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import dishPlaceholder from '~/assets/dish-placeholder.png';

const StyledCard = styled(Card)`
  min-width: 300px;
  max-width: 345px;
  margin: 12px;
`;

export default function Dish(props) {
  const { name, description, price, image, children } = props;

  return (
    <>
      <StyledCard>
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
        </CardContent>

        <CardActions>{children}</CardActions>
      </StyledCard>
    </>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node,
};

Dish.defaultProps = {
  description: null,
  children: null,
  image: dishPlaceholder,
};
