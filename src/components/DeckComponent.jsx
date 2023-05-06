import React from 'react'
import { View, Text, Pressable } from 'react-native'
import CardGradientComponent from './CardGradientComponent'

const DeckComponent = ({ title, navigate, params = {}, viewOnly = false, screen, borderColor = "#ffffff" }) => {
    return (
        <Pressable onPress={() => {!viewOnly && navigate(screen, params)}} className="w-[155px] h-[200px] my-1 mx-auto">
            <View className="absolute left-0 top-0">
                <CardGradientComponent borderColor={borderColor} />
            </View>
            <View className="absolute top-[10px] right-[10px]">
                <CardGradientComponent borderColor={borderColor} />
            </View>
            <View className="absolute right-0 bottom-0">
                <CardGradientComponent borderColor={borderColor} />
                <View className="absolute h-full w-full p-4 justify-center items-center">
                    <Text className="text-white text-xl font-bold text-center break-words">{title}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default DeckComponent