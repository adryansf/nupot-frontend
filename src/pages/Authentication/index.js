import React from 'react';
import { useLocation, useHistory, Link } from 'react-router-dom';
import { useAuth } from '~/contexts/AuthContext';
import Form from '~/components/Form';
import TextField from '~/components/TextField';
import SubmitButton from '~/components/SubmitButton';
import { handleLogin, handleRegister } from './handleSubmit';
import { getValidationSchema, getInitialValues, getLinks } from './constants';
import { FormContainer, Container, Illustration } from './styles';
import illustration from '~/assets/auth-page-illustration.svg';

export default function Register() {
  const [, setSigned] = useAuth();
  const location = useLocation();
  const history = useHistory();
  const isRegisterPage = location.pathname === '/register';
  const initialValues = getInitialValues(isRegisterPage);
  const validationSchema = getValidationSchema(isRegisterPage);
  const handleSubmit = (isRegisterPage ? handleRegister : handleLogin)(
    history,
    setSigned
  );
  const link = getLinks(isRegisterPage);
  return (
    <Container>
      <Illustration src={illustration} alt="ilustração" />
      <FormContainer>
        <h1>{isRegisterPage ? 'Registre-se' : 'Entrar'}</h1>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <TextField
            name="email"
            label="E-mail"
            variant="outlined"
            margin="dense"
            size="small"
            fullWidth
          />
          <TextField
            name="password"
            label="Senha"
            variant="outlined"
            margin="dense"
            size="small"
            type="password"
            fullWidth
          />
          {location.pathname === '/register' && (
            <TextField
              name="confirmPassword"
              label="Confirme a senha"
              variant="outlined"
              margin="dense"
              size="small"
              type="password"
              fullWidth
            />
          )}
          <SubmitButton
            variant="contained"
            color="primary"
            shape="rounded"
            style={{ justifySelf: 'center' }}
          >
            Enviar
          </SubmitButton>
        </Form>
        <Link to={link.to}>{link.label}</Link>
      </FormContainer>
    </Container>
  );
}
