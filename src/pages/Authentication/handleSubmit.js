import api from '~/services/api';

export const handleLogin = (history, setSigned) => async (values, actions) => {
  try {
    const {
      data: { token },
    } = await api.post('/tokens', values);

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
    const { confirmPassword, ...credentials } = values;

    const { status, data } = await api.post('/users', credentials);
    if (status === 201) {
      const { token } = data;
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
