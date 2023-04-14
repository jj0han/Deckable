import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const LargeButton = ({ navigation, screen, title, border = false }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(screen)} className="w-full h-12 mb-4">
            <Text className="text-white text-xl font-bold text-center absolute z-10 left-0 right-0 top-2">{title}</Text>
            <LinearGradient
                colors={['#4F6597', '#6E5DAD', '#D442EF']}
                className="w-full h-full rounded-lg"
                start={{ x: 0, y: 0 }}
                end={{ x: 0.85, y: 0.85 }}
            />
            {border ? <View className="absolute bg-[#292929] w-[95%] h-[35px] rounded-md right-[2.5%] top-[7px]"></View> : null}
        </TouchableOpacity>
    )
}

export default LargeButton