import React, { useState } from 'react'
import ConfirmDialog from '../dialogs/ConfirmDialog'
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function ButtonDialogueComponent({ title, navigation, useRemove = false, removeUserDeck, id, screen, border = false, fullWidth = false, time = 0 }) {

    const navigate = () => {
        if (useRemove) {
            console.log("removed")
            removeUserDeck(id)
            setVisible(false)
        }
        setTimeout(() => { navigation.navigate(screen) }, time)
    }

    const [visible, setVisible] = useState(false)

    const handleCancel = () => {
        setVisible(false)
    }

    const deleteDialog = () => {
        setVisible(true)
    }

    return (
        <>
            <ConfirmDialog
                title={'Deseja apagar este Deck?'}
                visible={visible}
                handleCancel={handleCancel}
                action={navigate}
            />
            <TouchableOpacity onPress={() => deleteDialog()} style={{ width: fullWidth ? "100%" : "70%" }} className="mb-4 h-12">
                <Text className="text-white text-xl font-bold text-center absolute z-10 left-0 right-0 top-2">{title}</Text>
                <LinearGradient
                    colors={['#4F6597', '#6E5DAD', '#D442EF']}
                    className="w-full h-full rounded-lg"
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.85, y: 0.85 }}
                />
                {border ? <View className="absolute bg-[#292929] w-[95%] h-[35px] rounded-md right-[2.5%] top-[7px]"></View> : null}
            </TouchableOpacity>
        </>
    )
}

export default ButtonDialogueComponent