import React from 'react'
import { Text } from 'react-native'
import auth from '@react-native-firebase/auth'
import Dialog from "react-native-dialog"

const ChangeUserNameDialog = ({ visible, setVisible, handleCancel, title, errorMessage, newUserName, setNewUserName, setUserName, showError, setShowError }) => {

    const handleChangeUserName = (newUserName) => {
        if (newUserName.trim() !== "") {
            auth().currentUser.updateProfile({
                displayName: newUserName.trim(),
            })
            setVisible(false)
            setShowError(false)
            setUserName(newUserName.trim())
            setNewUserName("")
        } else {
            setShowError(true)
        }
    }

    return (
        <Dialog.Container visible={visible} onBackdropPress={handleCancel} headerStyle={{ alignItems: "center" }} contentStyle={{ borderRadius: 25, backgroundColor: "#292929" }} footerStyle={{ justifyContent: "space-around" }} >
            <Dialog.Title><Text className="font-semibold">{title}</Text></Dialog.Title>
            <Dialog.Input onChange={(e) => setNewUserName(e.nativeEvent.text)} value={newUserName} placeholder='' wrapperStyle={{ paddingHorizontal: 10, }} />
            {showError && <Dialog.Description><Text className="font-medium text-red-500">{errorMessage}</Text></Dialog.Description>}
            <Dialog.Button label="Cancelar" onPress={handleCancel} bold={true} color={"#6E5DAD"} />
            <Dialog.Button label="Salvar" onPress={() => handleChangeUserName(newUserName)} bold={true} color={"#6E5DAD"} />
        </Dialog.Container>
    )
}

export default ChangeUserNameDialog