import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Button from '~/components/Button';
import { useShop } from '~/contexts/ShopContext';
import useStyles from './styles';
import Form from './Form';
import api from '~/services/api';

export default () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [shopState, dispatch] = useShop();
  const history = useHistory();

  if (shopState.length === 0) {
    history.push('/search');
  }

  const handleChange = (index, dish) => event => {
    event.preventDefault();
    const quantity = Math.floor(Math.max(event.target.value, 0));
    dispatch({
      type: 'updateOne',
      payload: [index, { ...dish, quantity }],
    });
  };

  const handleConfirmation = event => {
    const order = () => {
      dispatch({ type: 'resetCart' });
      history.push('/order_progress');
    };
    setTimeout(order, 500);
  };

  return (
    <Paper className={classes.root}>
      {shopState.map((dish, index) => (
        <div className={classes.item}>
          <div
            title={dish.name}
            className={classes.img}
            style={{ backgroundImage: `url(${dish.photo})` }}
          />
          <div className={classes.price}>
            <TextField
              className={classes.quantity}
              variant="outlined"
              label="Quantidade"
              type="number"
              margin="dense"
              value={dish.quantity}
              onChange={handleChange(index, dish)}
            />
            <Typography>
              R$
              {(dish.quantity * dish.price)
                .toFixed(2)
                .toString()
                .replace('.', ',')}
            </Typography>
          </div>
          <IconButton
            onClick={() => dispatch({ type: 'removeById', payload: dish.id })}
          >
            <CloseIcon color="secondary" />
          </IconButton>
        </div>
      ))}

      <Button color="#28a745" textColor="#eee" onClick={() => setOpen(true)}>
        Finalizar compra
      </Button>
      <Link to="/search" className={classes.last}>
        Continuar comprando
      </Link>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirmação de pedido</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Você prefere receber seu prato em casa ou prefere retirar com o
              vendedor?
            </Typography>
            <Form />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="#dc3545"
            textColor="#eee"
            onClick={() => setOpen(false)}
          >
            Cancelar
          </Button>
          <Button textColor="#28a745" onClick={handleConfirmation}>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};
