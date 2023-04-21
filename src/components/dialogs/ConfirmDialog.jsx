import React from 'react'
import { Text } from 'react-native'
import Dialog from "react-native-dialog"

const ConfirmDialog = ({ title, action, handleCancel, visible }) => {
    return (
        <Dialog.Container visible={visible} onBackdropPress={handleCancel} headerStyle={{ alignItems: "center" }} contentStyle={{ borderRadius: 25, backgroundColor: "#292929" }} footerStyle={{ justifyContent: "space-around" }} >
            <Dialog.Title><Text className="font-semibold">{title}</Text></Dialog.Title>
            <Dialog.Button label="Cancelar" onPress={handleCancel} bold={true} color={"#6E5DAD"} />
            <Dialog.Button label="Confirmar" onPress={() => action()} bold={true} color={"#6E5DAD"} />
        </Dialog.Container>
    )
}

export default ConfirmDialog