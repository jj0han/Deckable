import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const DeckComponent = ({ title, color = "#ffffff" }) => {
    return (
        <View className="w-[155px] h-[200px] my-1 bg-transparent">
            <View className="absolute left-0 top-0">
                <LinearGradient
                    colors={['#4F6597', '#6E5DAD', '#D442EF']}
                    className={`w-[136px] h-[180px] rounded-3xl border-[3px] border-[${color}]`}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.85, y: 0.85 }}
                />
            </View>
            <View className="absolute top-[10px] right-[10px]">
                <LinearGradient
                    colors={['#4F6597', '#6E5DAD', '#D442EF']}
                    className={`w-[136px] h-[180px] rounded-3xl border-[3px] border-[${color}]`}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.85, y: 0.85 }}
                />
            </View>
            <View className="absolute right-0 bottom-0">
                <LinearGradient
                    colors={['#4F6597', '#6E5DAD', '#D442EF']}
                    className={`w-[136px] h-[180px] rounded-3xl border-[3px] border-[${color}]`}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.85, y: 0.85 }}
                />
                <Text className="absolute text-white text-xl font-bold text-center left-0 right-0 top-[30%] bottom-[40%] px-2">{title}</Text>
            </View>
        </View>
    )
}

export default DeckComponent