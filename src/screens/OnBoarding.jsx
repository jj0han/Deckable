import { View, Text, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LargeButton from '../components/LargeButton'

const OnBoarding = ({ navigation }) => {
    return (
        <SafeAreaView className="flex-1 justify-around items-center bg-[#292929] px-10 pt-[20%]">
            <View className="items-center">
                <Text className="text-white text-5xl font-bold">Deckable</Text>
                <Text className="text-white text-xl font-extralight">Seu app de revisões</Text>
            </View>
            <View>
                <Text className="text-white text-xl font-semibold text-center">Aprenda de uma maneira fácil e rápida</Text>
            </View>
            <View className="w-[231px] h-[204px]">
                <View className="absolute bottom-3 right-[61px] -rotate-45">
                    <LinearGradient
                        colors={['#4F6597', '#6E5DAD', '#D442EF']}
                        className="w-[136px] h-[180px] rounded-3xl border-[3px] border-[#292929]"
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.85, y: 0.85 }}
                    />
                </View>
                <View className="absolute bottom-3 right-8 rotate-[-25deg]">
                    <LinearGradient
                        colors={['#4F6597', '#6E5DAD', '#D442EF']}
                        className="w-[136px] h-[180px] rounded-3xl border-[3px] border-[#292929]"
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.85, y: 0.85 }}
                    />
                </View>
                <View className="absolute right-0 bottom-0">
                    <LinearGradient
                        colors={['#4F6597', '#6E5DAD', '#D442EF']}
                        className="w-[136px] h-[180px] rounded-3xl border-[3px] border-[#292929]"
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0.85, y: 0.85 }}
                    />
                </View>
            </View>
            <View className="w-[231px]">
                <LargeButton navigation={navigation} screen={"Entrar"} title={"Entrar"} />
                <LargeButton navigation={navigation} screen={"Cadastrar"} title={"Cadastrar"} border={true} />
            </View>
        </SafeAreaView>
    )
}

export default OnBoarding