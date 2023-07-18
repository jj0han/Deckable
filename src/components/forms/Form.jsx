import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Field } from 'formik'
import { AuthContext } from '../../context/AuthContext'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import { Google } from '../../assets/images/svgs'
import FormikForm from './FormikForm'
import FormikButton from './FormikButton'
import FormikFormField from './FormikFormField'
import { loginSchema, signupSchema } from '../../constants/schemas/yupSchemas'

const Form = ({ type = "login" }) => {
    const { login, signup, loginMessages, signInWithGoogle } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    return (
        <FormBackgroundLayout>
            <View className="items-center justify-center py-16">
                <Text className="text-white text-5xl font-bold">Deckable</Text>
                <Text className="text-white text-xl font-extralight">Seu app de revisões</Text>
            </View>
            <FormLayout>
                <FormikForm
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    onSubmit={
                        (values, { resetForm }) => {
                            console.log(values)
                            if (type === "signup") {
                                signup(values.email, values.password, values.name)
                            } else {
                                login(values.email, values.password, setIsLoading)
                            }
                            resetForm()
                        }
                    }
                    validationSchema={type === 'signup' ? signupSchema : loginSchema}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    <View className="w-full">
                        <Text className="text-black text-3xl font-semibold tracking-widest">{type === "signup" ? "Cadastrar" : "Entrar"}</Text>
                        <Text className="text-[#666666] text-base font-semibold">Faça seu cadastro para continuar</Text>
                    </View>
                    {loginMessages !== "" ? <Text className="text-red-600">{loginMessages}</Text> : null}
                    {type === 'signup' && <Field component={FormikFormField} name={'name'} placeholder={'Nome de usuário'} />}
                    <Field component={FormikFormField} name={'email'} placeholder={'E-mail'} />
                    <Field component={FormikFormField} name={'password'} placeholder={'Senha'} secureTextEntry />
                    {type === 'signup' && <Field component={FormikFormField} name={'confirmPassword'} placeholder={'Confirmar Senha'} secureTextEntry />}
                    <FormikButton title={'Entrar'} EnableGlow={true} isLoading={isLoading} />
                    <View className="w-full items-center">
                        <View className="w-full flex-row justify-center items-center my-5" >
                            <View className="border-b border-[#d7d7d7] grow" />
                            <Text className="text-base text-center text-[#666666] font-semibold mx-2">Ou</Text>
                            <View className="border-b border-[#d7d7d7] grow" />
                        </View>
                        <TouchableOpacity onPress={() => signInWithGoogle()} className="bg-[#F7F7F7] border-[#D7D7D7] border-[1px] px-4 rounded-lg w-full h-12 flex-row justify-center items-center">
                            <Google />
                            <Text className="text-[#8a8a8a] font-semibold ml-5">Continuar com Google</Text>
                        </TouchableOpacity>
                    </View>
                </FormikForm>
            </FormLayout>
        </FormBackgroundLayout>
    )
}

export default Form