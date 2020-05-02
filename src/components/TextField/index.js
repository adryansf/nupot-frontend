import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Field } from 'formik'

const TextFieldComponent = props => {
  const { name, ...rest } = props
  return (
    <Field name={name}>
      {({field, meta}) => <TextField 
        error={meta.touched && !!meta.error}
        helperText={meta.touched && meta.error} 
        {...field} {...rest}
      />}
    </Field>
  )
}

export default TextFieldComponent
