import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from '../context/AuthContext'
import { FormBackgroundLayout, FormLayout } from '../layouts/forms'
import { ChangeColorSchemeDialog, ChangeUserNameDialog, ConfirmDialog } from '../components'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LAYOUT_DARK_GRAY } from '../constants/colors/layoutColors'

const Settings = () => {
  const { logout, user } = useContext(AuthContext)
  const date = new Date(user.metadata.creationTime)
  const [visible, setVisible] = useState(false)
  const [showLogOut, setShowLogOut] = useState(false)
  const [showColorScheme, setShowColorScheme] = useState(false)
  const [showError, setShowError] = useState(false)
  const [userName, setUserName] = useState(auth().currentUser.displayName)
  const [newUserName, setNewUserName] = useState("")

  const showDialog = () => {
    setVisible(true)
    setShowError(false)
    setNewUserName("")
  }

  const handleCancel = () => {
    setVisible(false)
    setShowLogOut(false)
    setShowColorScheme(false)
  }

  const logOutDialogue = () => {
    setShowLogOut(true)
  }

  const colorSchemeDialog = () => {
    setShowColorScheme(true)
  }

  return (
    <>
      <ChangeUserNameDialog
        title={'Alterar nome de Usuário'}
        visible={visible}
        setVisible={setVisible}
        showError={showError}
        setShowError={setShowError}
        handleCancel={handleCancel}
        errorMessage={'Digite um nome válido!'}
        useName={userName}
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        setUserName={setUserName}
      />

      <ConfirmDialog
        title={'Deseja mesmo sair?'}
        visible={showLogOut}
        handleCancel={handleCancel}
        action={logout}
      />

      <ChangeColorSchemeDialog
        title={'Alterar esquema de cores'}
        visible={showColorScheme}
        handleCancel={handleCancel}

      />

      <FormBackgroundLayout>
        <View className="items-center gap-y-5 py-5 h-2/5">
          <View className="items-center">
            <Text className="text-[20px] text-white">{userName}</Text>
            <Text className="text-[16px] font-light text-white">{user.email}</Text>
          </View>
          <Image source={user.photoURL !== null ? { uri: user.photoURL } : require('../assets/images/land.jpg')} className="w-[150px] h-[150px] rounded-full" />
          {date && <Text className="text-white">Entrou em: {date.toLocaleDateString('pt-BR')}</Text>}
        </View>
        <FormLayout height={0.55}>
          <View className="gap-y-10">
            <TouchableOpacity onPress={showDialog} className="flex flex-row items-center gap-x-10 p-5">
              <MaterialCommunityIcons color={LAYOUT_DARK_GRAY} name={'pencil'} size={20} />
              <Text className="text-black text-base">Alterar nome de usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-x-10 p-5">
              <MaterialCommunityIcons color={LAYOUT_DARK_GRAY} name={'camera'} size={20} />
              <Text className="text-black text-base ml-2">Alterar foto de usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={colorSchemeDialog} className="flex flex-row items-center gap-x-10 p-5">
              <MaterialIcons color={LAYOUT_DARK_GRAY} name={'color-lens'} size={20} />
              <Text className="text-black text-base ml-2">Alternar Esquema de Cores</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logOutDialogue()} className="flex flex-row items-center gap-x-10 p-5" >
              <MaterialIcons color={"rgb(239 68 68)"} name={'logout'} size={20} />
              <Text className="text-red-500 text-base ml-2">Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </FormLayout>
      </FormBackgroundLayout>
    </>
  )
}

export default Settings