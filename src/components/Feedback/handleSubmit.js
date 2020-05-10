import api from '~/services/api';

export default setOpen => async (values, actions) => {
  console.log(values);
  setOpen(false);
};
