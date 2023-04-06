import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import DeckComponent from '../components/DeckComponent'
import useHeaderRight from '../hooks/useHeaderRight'

const Home = ({ navigation }) => {

    useHeaderRight(navigation, "#292929")

    return (
        <SafeAreaView className="bg-white flex-1 px-6 pb-[90px]">
            <TextInput className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] my-3 px-4 rounded-full w-full" placeholder='Pesquisar...' placeholderTextColor={"#000"} />
            <View className="bg-[#292929] my-3 px-4 rounded-3xl w-full">
                <Text className="font-black my-4 text-xl text-white">Revisar Hoje</Text>
                <Text className="mb-4 text-white text-base">Você tem 1 revisão marcada para hoje!</Text>
            </View>
            <ScrollView>
                <View className="flex-wrap flex-row justify-around">
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                    <DeckComponent title={"Deck Genérico"} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home