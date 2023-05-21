import React from 'react'
import { Text } from 'react-native'
import Dialog from "react-native-dialog"

const ConfirmDialog = ({ title, action, handleCancel, visible }) => {
    return (
        <Dialog.Container visible={visible} onBackdropPress={handleCancel} headerStyle={{ alignItems: "center" }} contentStyle={{ borderRadius: 15, backgroundColor: "#292929" }} footerStyle={{ justifyContent: "space-around" }} >
            <Dialog.Title><Text className="text-white font-semibold">{title}</Text></Dialog.Title>
            <Dialog.Button label="Cancelar" onPress={handleCancel} bold={true} color={"#6E5DAD"} />
            <Dialog.Button label="Confirmar" style={{backgroundColor: "#6E5DAD", borderRadius: 7,}} onPress={() => action()} bold={true} color={"#FFFFFF"} />
        </Dialog.Container>
    )
}

export default ConfirmDialog