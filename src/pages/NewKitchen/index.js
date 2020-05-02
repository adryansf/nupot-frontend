import React from 'react';
// import { useLocation } from 'react-router-dom';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import SubmitButton from '~/components/SubmitButton';
import handleSubmit from './handleSubmit';
import { initialValues, validationSchema } from './constants';

import { Container, FormContainer, InfoContainer } from './styles';

export default function NewKitchen() {
  // const location = useLocation();
  return (
    <Container>
      <InfoContainer>
        <p>Cadastre sua cozinha</p>
        <p>+ Visibilidade</p>
        <p>+ Vendas</p>
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
