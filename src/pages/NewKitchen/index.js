import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Chip from '@material-ui/core/Chip';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import Checkbox from '~/components/Checkbox';
import SubmitButton from '~/components/SubmitButton';
import AvatarInput from '~/components/AvatarInput';
import getHandler from './handleSubmit';
import { initialValues, validationSchema } from './constants';

import { Container, FormContainer, InfoContainer } from './styles';

export default function NewKitchen() {
  const history = useHistory();

  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChangeAvatar = event => {
    const file = event.target.files[0];
    setPhoto(file);
    const url = URL.createObjectURL(file);
    setPreview(url);
  };
  const handleSubmit = getHandler(history, photo);

  return (
    <Container>
      <InfoContainer>
        <p>Cadastre sua cozinha. Veja as Vantagens:</p>
        <p>Ganhe mais visibilidade</p>
        <p>Aumente suas vendas</p>
      </InfoContainer>
      <FormContainer>
        <h1>Nova cozinha</h1>
        <br />
        <AvatarInput onChange={handleChangeAvatar} image={preview}>
          <Chip
            label="Escolha uma foto para sua cozinha"
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </AvatarInput>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <TextField
            name="name"
            label="Nome da cozinha"
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
          <FormControlLabel
            control={<Checkbox name="geolocation" checked />}
            label="Usar minha localização"
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
