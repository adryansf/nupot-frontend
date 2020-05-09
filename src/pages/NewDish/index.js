import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import SubmitButton from '~/components/SubmitButton';
import getHandler from './handleSubmit';
import { initialValues, validationSchema } from './constants';

import { Container, FormContainer, InfoContainer, Label } from './styles';

export default function NewDish() {
  const [photo, setPhoto] = useState(null);

  const onFileChange = event => {
    setPhoto(event.target.files[0]);
  };

  const history = useHistory();
  const handleSubmit = getHandler(history, photo);

  return (
    <Container>
      <InfoContainer />
      <FormContainer>
        <h1>Novo prato</h1>
        <Label>
          Adicionar foto
          <input type="file" style={{ display: 'none' }} />
        </Label>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            label="Nome"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            name="description"
            label="Descrição"
            placeholder="Descreva em poucas palavras seu prato"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            name="price"
            label="Preço"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <SubmitButton
            variant="contained"
            color="primary"
            shape="rounded"
            style={{ justifySelf: 'center' }}
          >
            Enviar
          </SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  );
}
