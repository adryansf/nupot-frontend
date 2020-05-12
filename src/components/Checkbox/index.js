import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Field } from 'formik';

const CheckboxComponent = props => {
  const { name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, meta }) => <Checkbox {...field} {...rest} />}
    </Field>
  );
};

export default CheckboxComponent;
