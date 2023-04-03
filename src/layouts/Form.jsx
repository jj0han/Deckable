import { View, Text, SafeAreaView,  } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import FormInputs from '../components/FormInputs'
import FormButton from '../components/FormButton'

const Form = ({ type = "login" }) => {
    const { login, signup } = useContext(AuthContext)

    return (
        <SafeAreaView className="flex-1 justify-end items-center bg-[#292929]">
            <View className="items-center mb-16">
                <Text className="text-white text-5xl font-bold">Deckable</Text>
                <Text className="text-white text-xl font-extralight">Seu app de revisões</Text>
            </View>
            <View className="bg-white items-center p-10 w-full rounded-t-3xl">
                <View className="gap-2 w-full">
                    <Text className="text-black text-3xl font-semibold tracking-widest">{type === "signup" ? "Cadastrar" : "Entrar"}</Text>
                    <Text className="text-[#666666] text-base font-semibold">Faça ser cadastro para continuar</Text>
                </View>
                <FormInputs type={type} />
                <FormButton title={type === "signup" ? "Cadastrar" : "Entrar"} action={type === "signup" ? signup : login} />
            </View>
        </SafeAreaView>
    )
}

export default Form