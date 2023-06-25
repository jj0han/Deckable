import React from 'react'
import { Text, TextInput } from 'react-native'

const FormikFormField = (props) => {
    const {
        placeholder,
        field: { name, onBlur, onChange, value },
        form: { errors, touched, setFieldTouched },
        ...inputProps
    } = props;
    const hasError = errors[name] && touched[name];

    return (
        <>
            <TextInput
                className="bg-[#F7F7F7] font-semibold text-black border-[1px] px-4 my-3 rounded-2xl w-full"
                style={{ borderColor: hasError ? 'red' : '#D7D7D7' }}
                placeholder={placeholder}
                placeholderTextColor={"#8a8a8a"}
                onChangeText={text => onChange(name)(text)}
                onBlur={() => {
                    setFieldTouched(name);
                    onBlur(name);
                }}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                multiline={true}
                {...inputProps}
            />
            {hasError && <Text className="text-red-500 ml-4">{errors[name]}</Text>}
        </>
    )
}

export default FormikFormField