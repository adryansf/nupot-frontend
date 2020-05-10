import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import List from './List';
import { useShop } from '../../contexts/ShopContext';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <List />

      <button onClick={() => setOpen(true)}>Fazer pedido</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Você confirma?</DialogTitle>
        <DialogContent>
          <DialogContentText>Você confirma?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/order_progress">
            <button>Confirmar</button>
          </Link>
        </DialogActions>
      </Dialog>
    </>
  );
};
