import React from 'react';
import Radio from '@material-ui/core/Radio';
import { Field } from 'formik';

const RadioComponent = props => {
  const { name, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <Radio
          error={meta.touched && !!meta.error}
          helperText={meta.touched && meta.error}
          {...field}
          {...rest}
        />
      )}
    </Field>
  );
};

export default RadioComponent;
