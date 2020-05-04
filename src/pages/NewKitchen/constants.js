import * as Yup from 'yup';

export const initialValues = { name: '', legalId: '' };

export const validationSchema = Yup.object({
  name: Yup.string().min(3).max(30).required(),
  legalId: Yup.string().required(),
});
