import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../../context/AuthContext'
import { FormButtonComponent } from '../../components/buttons'
import TextInputComponent from '../../components/TextInputComponent'
import FormBackgroungLayout from './FormBackgroungLayout'
import FormLayout from './FormLayout'

const Form = ({ type = "login" }) => {
    const { login, signup, loginMessages } = useContext(AuthContext)
    const [userName, setUserName] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [userConfirmPassword, setUserConfirmPassword] = useState("")

    return (
        <FormBackgroungLayout>
            <View className="items-center justify-center grow">
                <Text className="text-white text-5xl font-bold">Deckable</Text>
                <Text className="text-white text-xl font-extralight">Seu app de revisões</Text>
            </View>
            <FormLayout>
                <View className="w-full">
                    <Text className="text-black text-3xl font-semibold tracking-widest">{type === "signup" ? "Cadastrar" : "Entrar"}</Text>
                    <Text className="text-[#666666] text-base font-semibold">Faça ser cadastro para continuar</Text>
                </View>
                {loginMessages !== "" ? <Text className="text-red-600">{loginMessages}</Text> : null}
                <View className="items-center">
                    <View className="items-center w-full py-10 gap-5">
                        {type === "signup" ?
                            <View className="w-full">
                                <TextInputComponent placeholder={"Username"} value={userName} setHandleText={setUserName} />
                            </View>
                            :
                            <Text className="hidden"></Text>
                        }
                        <View className="w-full">
                            <TextInputComponent placeholder={"Email"} value={userEmail} setHandleText={setUserEmail} />
                        </View>
                        <View className="w-full">
                            <TextInputComponent placeholder={"Password"} value={userPassword} setHandleText={setUserPassword} password={true} />
                        </View>
                        {type === "signup" ?
                            <View className="w-full">
                                <TextInputComponent placeholder={"Confirm Password"} value={userConfirmPassword} setHandleText={setUserConfirmPassword} password={true} />
                            </View>
                            :
                            <Text className="hidden"></Text>
                        }
                    </View>
                    <FormButtonComponent type={type} title={type === "signup" ? "Cadastrar" : "Entrar"} action={type === "signup" ? signup : login} userName={userName.trim()} email={userEmail} password={userPassword.trim()} confirmPassword={userConfirmPassword.trim()} />
                </View>
            </FormLayout>
        </FormBackgroungLayout>
    )
}

export default Form