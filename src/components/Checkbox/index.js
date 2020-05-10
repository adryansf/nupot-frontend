import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { Field } from 'formik';

const CheckboxComponent = props => {
  const { name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <Checkbox
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
          {...field}
          {...rest}
        />
      )}
    </Field>
  );
};

export default CheckboxComponent;
