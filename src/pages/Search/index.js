import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Headline from '../../components/Headline';
import Dish from './Dish';
import { Container, Dishes } from './styles';
import api from '../../services/api';

export default function Search() {
  const [dishes, setDishes] = useState([]);
  const [open, setOpen] = useState(false);
  const { search } = useLocation();
  const handleOrder = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchDishes = async () => {
      const { data } = await api.get(`/dishes${search}`);
      console.log(data);
      setDishes(data);
    };
    fetchDishes();
  }, [search]);

  return (
    <Container>
      <Headline>
        Escolha a sua <span>Refeição</span>
      </Headline>
      <Dishes>
        {dishes.map(dish => (
          <Dish
            key={dish.id}
            onOrder={handleOrder}
            id={dish.id}
            name={dish.name}
            description={dish.description}
            price={dish.price}
            image={`http://prattu-api.herokuapp.com${dish.photo}`}
          />
        ))}
      </Dishes>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Obrigado por testar nossa plataforma!
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Em breve você poderá desfrutar de todas as nossas funcionalidades na
            íntegra
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
