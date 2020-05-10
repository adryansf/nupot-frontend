import api from '~/services/api';

export default (history, file) => async (values, actions) => {
  const token = localStorage.getItem('accessToken');
  const formData = new FormData();
  formData.append('photo', file);
  formData.append('name', values.name);
  formData.append('price', values.price);
  formData.append('description', values.description);
  try {
    const { status } = await api.post('/dishes', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (status === 201) {
      history.push('/my_kitchen');
    }
  } catch (error) {
    console.log(error);
  } finally {
    actions.setSubmitting(false);
  }
};
