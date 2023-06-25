import React from 'react'
import { Formik } from 'formik'

const FormikForm = ({ initialValues, onSubmit, validationSchema, validateOnChange, validateOnBlur, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            validateOnChange={validateOnChange}
            validateOnBlur={validateOnBlur}
            >
            
            {() => <>{children}</>}
        </Formik>
    )
}

export default FormikForm