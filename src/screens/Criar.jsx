import { Text, View, ScrollView, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import useHeaderRight from '../hooks/useHeaderRight';
import DeckComponent from '../components/DeckComponent';
import NavigationButton from '../components/NavigationButton';

const Criar = ({ navigation }) => {
  const [deckTitle, setDeckTitle] = useState("")

  useHeaderRight(navigation, "#ffffff")

  return (
    <SafeAreaView className="bg-[#292929] flex-1 justify-end items-center">
      <View className="grow justify-center items-center">
        <DeckComponent title={deckTitle ? deckTitle : "Nome do seu Deck"} color='#292929' />
      </View>
      <View className="bg-white items-center p-10 w-full rounded-t-3xl grow">
        <TextInput onChange={(e) => setDeckTitle(e.nativeEvent.text)} value={deckTitle} placeholder='Digite um nome' placeholderTextColor={"#1e1e1e"} className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] px-4 rounded-2xl w-full" />
        <Text className="mb-4 text-white text-base">Você tem 1 revisão marcada para hoje!</Text>
        <NavigationButton title={"Criar"} navigation={navigation} screen={"Criar Carta"} />
      </View>
    </SafeAreaView>
  )
}

export default Criar