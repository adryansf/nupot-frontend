import api from '~/services/api';

export default history => async (values, actions) => {
  const token = localStorage.getItem('accessToken');
  try {
    const { status } = await api.post('/dishes', values, {
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
