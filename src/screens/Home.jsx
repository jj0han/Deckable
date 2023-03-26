import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const Home = () => {
    return (
        <SafeAreaView className="bg-white flex-1 items-center px-6">
            <TextInput className="bg-[#F7F7F7] border-[#D7D7D7] border-[1px] my-3 px-4 rounded-full w-full" placeholder='Pesquisar...' />
            <View className="bg-black my-3 px-4 rounded-3xl w-full">
                <Text className="font-black my-4 text-xl text-white">Revisar Hoje</Text>
                <Text className="mb-4 text-white text-base">Você tem 1 revisão marcada para hoje!</Text>
            </View>
            <View className="flex-1">
                <View className="bg-black rounded-3xl h-[180px] w-[136px]"></View>
            </View>
        </SafeAreaView>
    )
}

export default Home