import api from '~/services/api';

export default history => async (values, actions) => {
  try {
    const token = localStorage.getItem('accessToken');
    const { legalId, name } = values;
    const { status, data } = await api.post(
      '/kitchens',
      {
        legal_id: legalId,
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (status === 201) {
      const { token: newToken } = data;
      localStorage.setItem('accessToken', newToken);
      history.push('/my_kitchen');
    }
  } catch (error) {
    console.error(error);
  } finally {
    actions.setSubmitting(false);
  }
};
