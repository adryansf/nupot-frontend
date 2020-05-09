import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import dishPlaceholder from '~/assets/dish-placeholder.png';
import api from '../../services/api';

const StyledCard = styled(Card)`
  min-width: 345px;
  max-width: 345px;
  margin: 12px;
`;

export default function Dish(props) {
  const { name, description, price, image, id, onDelete } = props;

  const handleDelete = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const { status } = await api.delete(`/dishes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (status === 204) {
        onDelete(id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
          R${price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">
          Editar
        </Button>
        <Button color="secondary" onClick={handleDelete}>
          Deletar
        </Button>
      </CardActions>
    </StyledCard>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
};

Dish.defaultProps = {
  description: '',
  image: dishPlaceholder,
};
