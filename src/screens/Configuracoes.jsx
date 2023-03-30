import { View, Text, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Configuracoes = () => {
  const { logout } = useContext(AuthContext)

  return (
    <View className="flex-1 items-center bg-[#292929]">
      <View className="grow-[2]"></View>
      <View className="bg-white w-full rounded-t-[25px] grow-[1] items-center">
        <View className="items-center top-[-28%] absolute">
          <Text className="text-[20px] text-white">Usuário #1</Text>
          <Text className="text-[16px] text-white mb-6">usuario@gmail.com</Text>
          <Image source={require('../assets/images/land.jpg')} className="w-[150px] h-[150px] rounded-full" />
        </View>
        <View className="gap-7 py-[25%]">
          <Pressable >
            <Text className="text-black text-base">Alterar nome de usuário</Text>
          </Pressable>
          <Pressable >
            <Text className="text-black text-base">Alterar foto de usuário</Text>
          </Pressable>
          <Pressable >
            <Text className="text-black text-base">Alternar Tema do Aplicativo</Text>
          </Pressable>
          <Pressable onPress={() => logout()} >
            <Text className="text-black text-base">Sair da conta</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Configuracoes