import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth'
import { Path, Svg } from 'react-native-svg'
import Dialog from "react-native-dialog"
import { AuthContext } from '../context/AuthContext'
import { FormBackgroungLayout, FormLayout } from '../layouts/forms'
import { ChangeUserNameDialog, ConfirmDialog } from '../components/dialogs'

const Settings = () => {
  const { logout, user } = useContext(AuthContext)
  const date = new Date(user.metadata.creationTime)
  const [visible, setVisible] = useState(false)
  const [showLogOut, setShowLogOut] = useState(false)
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
  }

  const logOutDialogue = () => {
    setShowLogOut(true)
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

      <FormBackgroungLayout>
        <View className="items-center justify-center gap-y-5 grow">
          <View className="items-center">
            <Text className="text-[20px] text-white">{userName}</Text>
            <Text className="text-[16px] font-light text-white">{user.email}</Text>
          </View>
          <Image source={user.photoURL !== null ? { uri: user.photoURL } : require('../assets/images/land.jpg')} className="w-[150px] h-[150px] rounded-full" />
          {date && <Text>Entrou em: {date.toLocaleDateString('pt-BR')}</Text>}
        </View>
        <FormLayout>
          <View className="gap-y-10">
            <TouchableOpacity onPress={showDialog} className="flex flex-row items-center gap-x-10 p-5">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
              >
                <Path
                  fill="#292929"
                  d="M12.578.583a.788.788 0 0 0-.56.232l-1.351 1.352 3.166 3.166 1.352-1.351a.79.79 0 0 0 0-1.12L13.137.815a.788.788 0 0 0-.56-.232zM9.479 3.354.375 12.458v3.167h3.167l9.104-9.104-3.167-3.167z"
                />
              </Svg>
              <Text className="text-black text-base">Alterar nome de usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-x-10 p-5">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox='0 0 24 24'
              >
                <Path
                  fill="#292929"
                  d="M7.342 4.985c.422-.724.633-1.085.927-1.348a2.5 2.5 0 0 1 .898-.516C9.542 3 9.96 3 10.797 3h2.405c.838 0 1.256 0 1.631.121a2.5 2.5 0 0 1 .898.516c.294.263.505.624.927 1.348L17.25 6H18c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C22 7.9 22 8.6 22 10v6c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C20.1 20 19.4 20 18 20H6c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C2 18.1 2 17.4 2 16v-6c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C3.9 6 4.6 6 6 6h.75l.592-1.015zM12 17.05a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zm2.7-4.75a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z"
                />
              </Svg>
              <Text className="text-black text-base ml-2">Alterar foto de usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row items-center gap-x-10 p-5">
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 56 56"
              >
                <Path d="M41.148 36.156c-12.68 0-20.789-7.945-20.789-20.648 0-2.625.633-6.375 1.454-8.32.234-.54.257-.868.257-1.102 0-.633-.468-1.336-1.359-1.336-.281 0-.82.07-1.336.258C10.703 8.477 4.891 17.805 4.891 27.625c0 13.781 10.5 23.625 24.234 23.625 10.078 0 18.844-6.117 21.75-13.758a4.483 4.483 0 0 0 .234-1.312c0-.867-.703-1.453-1.36-1.453-.304 0-.562.07-1.007.21-1.804.586-4.71 1.22-7.593 1.22z" />
              </Svg>
              <Text className="text-black text-base ml-2">Alternar Tema do Aplicativo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => logOutDialogue()} className="flex flex-row items-center gap-x-10 p-5" >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                viewBox="0 0 24 24"
              >
                <Path
                  fill="red"
                  d="M21.593 10.943c.584.585.584 1.53 0 2.116L18.71 15.95c-.39.39-1.03.39-1.42 0a.996.996 0 0 1 0-1.41 9.552 9.552 0 0 1 1.689-1.345l.387-.242-.207-.206a10 10 0 0 1-2.24.254H8.998a1 1 0 1 1 0-2h7.921a10 10 0 0 1 2.24.254l.207-.206-.386-.241a9.562 9.562 0 0 1-1.69-1.348.996.996 0 0 1 0-1.41c.39-.39 1.03-.39 1.42 0l2.883 2.893zM14 16a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.505a1 1 0 1 0 2 0V5.5A2.5 2.5 0 0 0 12.5 3h-7A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21h7a2.5 2.5 0 0 0 2.5-2.5V17a1 1 0 0 0-1-1z"
                />
              </Svg>
              <Text className="text-red-500 text-base ml-2">Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </FormLayout>
      </FormBackgroungLayout>
    </>
  )
}

export default Settings