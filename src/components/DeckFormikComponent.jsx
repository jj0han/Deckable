import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useFormikContext } from 'formik'
import CardGradientComponent from './CardGradientComponent'

const DeckFormikComponent = ({ borderColor = WHITE, placeholder }) => {

    const { values } = useFormikContext()

    return (
        <TouchableOpacity className="relative w-[155px] h-[200px] mx-auto my-1">
            <View className="absolute left-0 top-0">
                <CardGradientComponent borderColor={borderColor} />
            </View>
            <View className="absolute top-[10px] right-[10px]">
                <CardGradientComponent borderColor={borderColor} />
            </View>
            <View className="absolute right-0 bottom-0">
                <CardGradientComponent borderColor={borderColor} />
                <View className="absolute h-full w-full p-4 justify-center items-center">
                    <Text className="text-white text-xl font-bold text-center break-words">{values.name.trim() ? values.name.trim() : placeholder}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default DeckFormikComponent