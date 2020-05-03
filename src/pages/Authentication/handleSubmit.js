import api from '~/services/api';

export const handleLogin = (history, setSigned) => async (values, actions) => {
  try {
    const {
      data: { token },
    } = await api.post('/sessions', values);

    if (token) {
      localStorage.setItem('accessToken', token);
      setSigned(true);
      history.push('/');
    }
  } catch (error) {
    console.error(error);
  } finally {
    actions.setSubmitting(false);
  }
};

export const handleRegister = (history, setSigned) => async (
  values,
  actions
) => {
  try {
    const { status } = await api.post('/users', values);
    if (status === 201) {
      const {
        data: { token },
      } = await api.post('/sessions', values);
      if (token) {
        localStorage.setItem('accessToken', token);
        setSigned(true);
        history.push('/');
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    actions.setSubmitting(false);
  }
};
