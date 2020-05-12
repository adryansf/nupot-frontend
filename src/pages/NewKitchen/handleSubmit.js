import api from '~/services/api';

export default (history, file) => async (values, actions) => {
  const formData = new FormData();
  try {
    const token = localStorage.getItem('accessToken');
    const { legalId, name, geolocation } = values;
    let location = null;
    if (geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          location = [latitude, longitude];
        });
      } catch (error) {}
    }
    console.log(geolocation);
    formData.append('legal_id', legalId);
    formData.append('name', name);
    formData.append('avatar', file);
    formData.append('location', JSON.stringify(location));
    const { status, data } = await api.post('/kitchens', formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
