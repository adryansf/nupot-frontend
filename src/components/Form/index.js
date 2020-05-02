import React from 'react'
import { Formik, Form } from 'formik'

const FormComponent = props => {
  const { children, className, ...rest } = props
  return (
    <Formik
      {...rest}
    >
      <Form className={className}>
        {children}
      </Form>
    </Formik>
  )
}

export default FormComponent
