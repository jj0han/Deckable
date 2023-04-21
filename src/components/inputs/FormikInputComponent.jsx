import { Text, TextInput } from 'react-native'
import React from 'react'

const FormikInputComponent = ({ formik, formikValue, formikErrors, placeholder, name, secureTextEntry = false }) => {

    return (
        <>
            <TextInput
                className="bg-[#F7F7F7] font-semibold text-black border-[1px] px-4 rounded-2xl w-full"
                style={{ borderColor: formikErrors ? 'red' : '#D7D7D7' }}
                value={formikValue}
                onChangeText={formik.handleChange(name)}
                placeholder={placeholder}
                placeholderTextColor={"#8a8a8a"}
                secureTextEntry={secureTextEntry}
            />
            {formikErrors && <Text className="text-red-500 ml-4">{formikErrors}</Text>}
        </>
    )
}

export default FormikInputComponent