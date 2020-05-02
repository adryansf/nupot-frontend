import * as Yup from 'yup';

export const validationSchema = Yup.object({
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

export const initialValues = { email: '', password: '', confirmPassword: '' };
