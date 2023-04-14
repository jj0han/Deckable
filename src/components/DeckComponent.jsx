import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import CardGradient from '../layouts/CardGradient'

const DeckComponent = ({ title, borderColor = "#ffffff" }) => {
    return (
        <View className="w-[155px] h-[200px] my-1">
            <View className="absolute left-0 top-0">
                <CardGradient borderColor={borderColor} />
            </View>
            <View className="absolute top-[10px] right-[10px]">
                <CardGradient borderColor={borderColor} />
            </View>
            <View className="absolute right-0 bottom-0">
                <CardGradient borderColor={borderColor} />
                <Text className="absolute text-white text-xl font-bold text-center left-0 right-0 top-[30%] bottom-[40%] px-2">{title}</Text>
            </View>
        </View>
    )
}

export default DeckComponent