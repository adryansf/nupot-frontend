import React from 'react';
import Button from '@material-ui/core/Button';
import { useFormikContext } from 'formik';

const SubmitButton = props => {
  const { isSubmitting } = useFormikContext();
  return <Button type="submit" disabled={isSubmitting} {...props} />;
};

export default SubmitButton;
