import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Field, useFormik } from 'formik'
import { AuthContext } from '../../context/AuthContext'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import { Google } from '../../assets/images/svgs'
import * as Yup from 'yup'
import FormikForm from './FormikForm'
import FormikButton from './FormikButton'
import FormikFormField from './FormikFormField'

const Form = ({ type = "login" }) => {
    const { login, signup, loginMessages, signInWithGoogle } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: (values) => {
            if (type === "signup") {
                signup(values.email, values.password, values.name)
            } else {
                login(values.email, values.password)
            }
        },
        validateOnChange: false,
        validateOnBlur: false,
        validate: (values) => {
            const errors = {}
            if (type === 'signup') {
                if (!values.name) {
                    errors.name = 'Digite um nome'
                } else if (!values.email) {
                    errors.email = 'Digite seu email'
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                    errors.email = 'Email inválido'
                } else if (!values.password) {
                    errors.password = 'Digite sua senha';
                } else if (!/^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/.test(values.password)) {
                    errors.password = 'A senha deve ter de 6 a 20 caracteres'
                } else if (!values.confirmPassword) {
                    errors.confirmPassword = 'Digite uma senha';
                } else if (!/^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/.test(values.confirmPassword)) {
                    errors.confirmPassword = 'A senha deve ter de 6 a 20 caracteres'
                } else if (values.confirmPassword != values.password) {
                    errors.confirmPassword = "As senhas não coincidem"
                }

            } else {
                if (!values.email) {
                    errors.email = 'Digite seu email'
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
                    errors.email = 'Email inválido'
                } else if (!values.password) {
                    errors.password = 'Digite sua senha';
                } else if (!/^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/.test(values.password)) {
                    errors.password = 'A senha deve ter de 6 a 20 caracteres'
                }
            }
            return errors
        },
    })

    const LoginValidationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Digite seu email")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido")
            .label("email"),
        password: Yup.string()
            .required("Digite sua senha")
            .matches(/^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/, 'A senha deve ter de 6 a 20 caracteres')
            .label("password"),
    })

    const signupValidationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Digite um nome')
            .label('name'),
        email: Yup.string()
            .required("Digite seu email")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email inválido")
            .label("email"),
        password: Yup.string()
            .required("Digite sua senha")
            .matches(/^[a-zA-Z0-9!@#$%^&*()_+{}|:?><~?><~,./]{6,20}$/, 'A senha deve ter de 6 a 20 caracteres')
            .label("password"),
        confirmPassword: Yup.string().required('As senhas não coincidem')
    })

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
                                login(values.email, values.password)
                            }
                            resetForm()
                        }
                    }
                    validationSchema={type === 'signup' ? signupValidationSchema : LoginValidationSchema}
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
                    <FormikButton title={'Entrar'} EnableGlow={true} />
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