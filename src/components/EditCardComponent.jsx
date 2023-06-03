import React from 'react'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { DARK_BLUE, PINK, PURPLE, WHITE } from '../constants/colors/gradientColors'

const EditCardComponent = ({ title, createdAt, borderColor = "" }) => {
    const date = new Date(createdAt)
    return (
        <View className="relative w-[155px] h-[200px] mx-auto my-1">
            <LinearGradient
                colors={[DARK_BLUE, PURPLE, PINK]}
                className="w-full h-full rounded-3xl border-[3px]"
                style={{
                    borderColor: borderColor ? borderColor : WHITE,
                }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0.85, y: 0.85 }}
            />
            <View className="absolute w-full h-full p-4 justify-between items-center">
                <Text className="text-white text-base font-bold text-center break-words">{title}</Text>
                <Text className="text-white text-base font-bold text-center break-words">{date.toLocaleDateString('pt-BR')}</Text>
            </View>
        </View>
    )
}

export default EditCardComponent