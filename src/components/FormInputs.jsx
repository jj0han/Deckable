import { View, Text, TextInput } from 'react-native'
import React from 'react'

const FormInputs = ({ type }) => {
    return (
        <View className="items-center w-full py-10 gap-8">
            <TextInput placeholder='Email' placeholderTextColor={"#1e1e1e"} className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] px-4 rounded-2xl w-full" />
            <TextInput placeholder='Senha' secureTextEntry={true} placeholderTextColor={"#1e1e1e"} className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] px-4 rounded-2xl w-full" />
            {type === "signup" ?
                <TextInput placeholder='Confirmar senha' secureTextEntry={true} placeholderTextColor={"#1e1e1e"} className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] px-4 rounded-2xl w-full" />
                : <Text></Text>}
        </View>
    )
}

export default FormInputs