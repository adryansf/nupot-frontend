import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <strong>Suas opções:</strong>
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="takeout"
          control={<Radio />}
          label="Prefiro ir retirar"
        />
        <FormControlLabel
          value="delivery"
          control={<Radio />}
          label="Prefiro receber em casa"
        />
      </RadioGroup>
    </FormControl>
  );
}
