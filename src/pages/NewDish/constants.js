import * as Yup from 'yup';

export const initialValues = { name: '', price: '', description: '' };

export const validationSchema = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required(),
  description: Yup.string(),
});
