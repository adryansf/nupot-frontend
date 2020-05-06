import * as Yup from 'yup';

const validationSchemaRegister = Yup.object({
  email: Yup.string()
    .email('Endereço de e-mail inválido')
    .required('Informe um email!'),
  password: Yup.string()
    .min(6, 'Sua senha precisa ter no mínimo 6 caracteres')
    .required('Você precisa de uma senha!'),
  confirmPassword: Yup.string()
    .required('Você precisa confirmar sua senha!')
    .oneOf([Yup.ref('password'), null], 'A confirmação de senha está errada!'),
});

const validationSchemaLogin = Yup.object({
  email: Yup.string()
    .email('Endereço de e-mail inválido')
    .required('Informe um email!'),
  password: Yup.string()
    .min(6, 'Sua senha precisa ter no mínimo 6 caracteres')
    .required('Você precisa de uma senha!'),
});

export const getValidationSchema = isRegister =>
  isRegister ? validationSchemaRegister : validationSchemaLogin;

export const getInitialValues = isRegister =>
  isRegister
    ? { email: '', password: '', confirmPassword: '' }
    : { email: '', password: '' };

export const getLinks = isRegister =>
  isRegister
    ? { label: 'Já tenho uma conta', to: '/login' }
    : { label: 'Ainda não tenho uma conta', to: '/register' };
