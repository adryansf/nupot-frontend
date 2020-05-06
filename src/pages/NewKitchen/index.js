import React from 'react';
import { useHistory } from 'react-router-dom';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import SubmitButton from '~/components/SubmitButton';
import getHandler from './handleSubmit';
import { initialValues, validationSchema } from './constants';

import { Container, FormContainer, InfoContainer } from './styles';

export default function NewKitchen() {
  const history = useHistory();
  const handleSubmit = getHandler(history);
  return (
    <Container>
      <InfoContainer>
        <p>Cadastre sua cozinha. Veja as Vantagens:</p>
        <p>Ganhe mais visibilidade</p>
        <p>Aumente suas vendas</p>
      </InfoContainer>
      <FormContainer>
        <h1>Nova cozinha</h1>
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
            name="legalId"
            label="CPF/CNPJ"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            name="address"
            label="Onde se localiza sua cozinha?"
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
