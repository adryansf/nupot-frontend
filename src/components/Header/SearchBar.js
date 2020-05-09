import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';

export default props => {
  const history = useHistory();
  const [query, setQuery] = useState('');
  const { handleOpen: setIsOpen = () => null, ...rest } = props;

  const handleSubmit = event => {
    event.preventDefault();
    setIsOpen(false);
    history.push(`/search?name=${query}`);
  };

  const handleChange = event => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBase onChange={handleChange} {...rest} />
    </form>
  );
};
