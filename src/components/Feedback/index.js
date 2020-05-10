import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Form from '../Form';
import TextField from '../TextField';
import SubmitButton from '../SubmitButton';
import useStyles from './styles';
import getHandler from './handleSubmit';
import { validationSchema, initialValues } from './constants';
import { useAuth } from '../../contexts/AuthContext';

export default () => {
  const { root, buttonSend } = useStyles();
  const [open, setOpen] = useState(false);
  const [isAuth] = useAuth();

  const handleSubmit = getHandler(setOpen, isAuth);

  return (
    <>
      <Fab
        color="primary"
        className={root}
        alt="feedback"
        title="O que você está achando do app?"
        onClick={() => setOpen(true)}
      >
        <FeedbackIcon />
      </Fab>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Nós queremos saber a sua opinião!</DialogTitle>
        <DialogContent>
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <TextField
              name="comment"
              label="Comente sobre a nossa plataforma!"
              placeholder="Como podemos melhorar? Também aceitamos críticas, elogios e sugestões! :)"
              variant="outlined"
              autoFocus
              multiline
              rows={8}
              fullWidth
            />
            <DialogActions>
              <SubmitButton className={buttonSend}>Enviar</SubmitButton>
              <Button color="secondary" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
            </DialogActions>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
