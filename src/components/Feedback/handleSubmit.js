import api from '~/services/api';

export default (setOpen, isAuth) => async (values, actions) => {
  let options = {};
  let done = false;
  if (isAuth) {
    const token = localStorage.getItem('accessToken');
    options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }
  try {
    const { status } = await api.post('/feedbacks', values, options);
    if (status === 201) {
      setOpen(false);
      done = true;
    }
  } catch (error) {
    console.error(error);
  } finally {
    if (!done) {
      actions.setSubmitting(false);
    }
  }
};
