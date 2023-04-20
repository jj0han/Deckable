import React, { useContext, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { AuthContext } from '../../context/AuthContext'
import { FormButtonComponent } from '../../components/buttons'
import TextInputComponent from '../../components/TextInputComponent'
import FormBackgroungLayout from './FormBackgroungLayout'
import FormLayout from './FormLayout'
import { Path, Svg } from 'react-native-svg'

const Form = ({ type = "login" }) => {
    const { login, signup, loginMessages, signInWithGoogle } = useContext(AuthContext)
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
                <ScrollView>
                    <View className="w-full">
                        <Text className="text-black text-3xl font-semibold tracking-widest">{type === "signup" ? "Cadastrar" : "Entrar"}</Text>
                        <Text className="text-[#666666] text-base font-semibold">Faça ser cadastro para continuar</Text>
                    </View>
                    {loginMessages !== "" ? <Text className="text-red-600">{loginMessages}</Text> : null}
                    <View className="items-center">
                        <View className="items-center w-full py-10 gap-y-5">
                            {type === "signup" ?
                                <View className="w-full">
                                    <TextInputComponent placeholder={"Nome de Usuário"} value={userName} setHandleText={setUserName} />
                                </View>
                                :
                                <Text className="hidden"></Text>
                            }
                            <View className="w-full">
                                <TextInputComponent placeholder={"Email"} value={userEmail} setHandleText={setUserEmail} />
                            </View>
                            <View className="w-full">
                                <TextInputComponent placeholder={"Senha"} value={userPassword} setHandleText={setUserPassword} password={true} />
                            </View>
                            {type === "signup" ?
                                <View className="w-full">
                                    <TextInputComponent placeholder={"Confirmar Senha"} value={userConfirmPassword} setHandleText={setUserConfirmPassword} password={true} />
                                </View>
                                :
                                <Text className="hidden"></Text>
                            }
                        </View>
                        <FormButtonComponent type={type} title={type === "signup" ? "Cadastrar" : "Entrar"} action={type === "signup" ? signup : login} userName={userName.trim()} email={userEmail} password={userPassword.trim()} confirmPassword={userConfirmPassword.trim()} />
                        <View className="w-full items-center">
                            <View className="w-full flex-row justify-center items-center my-5" >
                                <View className="border-b border-[#d7d7d7] grow" />
                                <Text className="text-base text-center text-[#666666] font-semibold mx-2">Ou</Text>
                                <View className="border-b border-[#d7d7d7] grow" />
                            </View>
                            <TouchableOpacity onPress={() => signInWithGoogle()} className="bg-[#F7F7F7] border-[#D7D7D7] border-[1px] px-4 rounded-lg w-full h-12 flex-row justify-center items-center">
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={34}
                                    height={34}
                                    fill="none"
                                >
                                    <Path
                                        fill="#FFC107"
                                        d="M30.891 14.226H29.75v-.06H17v5.667h8.006C23.838 23.132 20.7 25.5 17 25.5a8.5 8.5 0 0 1 0-17 8.45 8.45 0 0 1 5.639 2.153l4.007-4.007C24.116 4.288 20.731 2.833 17 2.833 9.176 2.833 2.833 9.176 2.833 17c0 7.823 6.343 14.167 14.167 14.167 7.823 0 14.167-6.344 14.167-14.167 0-.95-.098-1.877-.276-2.774z"
                                    />
                                    <Path
                                        fill="#FF3D00"
                                        d="M4.467 10.406 9.12 13.82A8.496 8.496 0 0 1 17 8.5c2.167 0 4.138.817 5.64 2.153l4.006-4.007C24.116 4.288 20.731 2.833 17 2.833c-5.441 0-10.16 3.072-12.533 7.573z"
                                    />
                                    <Path
                                        fill="#4CAF50"
                                        d="M17 31.167c3.66 0 6.984-1.4 9.498-3.678l-4.385-3.71A8.436 8.436 0 0 1 17 25.5c-3.685 0-6.813-2.35-7.992-5.628l-4.62 3.559c2.345 4.588 7.106 7.736 12.612 7.736z"
                                    />
                                    <Path
                                        fill="#1976D2"
                                        d="M30.891 14.226H29.75v-.06H17v5.667h8.006a8.528 8.528 0 0 1-2.895 3.947l.002-.002 4.385 3.71c-.31.282 4.669-3.405 4.669-10.488 0-.95-.098-1.877-.276-2.774z"
                                    />
                                </Svg>
                                <Text className="text-[#8a8a8a] font-semibold ml-5">Continuar com Google</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </FormLayout>
        </FormBackgroungLayout>
    )
}

export default Form