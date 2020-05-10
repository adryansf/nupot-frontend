import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import Checkbox from '~/components/Checkbox';
import SubmitButton from '~/components/SubmitButton';
import Upload from '~/components/Upload';
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
        <label style={{ cursor: 'pointer' }}>
          <img
            src={
              preview ||
              'https://visualpharm.com/assets/233/Insert-595b40b65ba036ed117d1e34.svg'
            }
            alt="preview"
            style={{
              height: '100x',
              width: '100px',
              borderRadius: '50%',
              display: 'block',
            }}
          />
          <input
            type="file"
            onChange={handleChangeAvatar}
            style={{ display: 'none ' }}
          />
        </label>
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
