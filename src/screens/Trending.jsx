import { Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import useHeaderRight from '../hooks/useHeaderRight'
import { DeckComponent } from '../components'

const Trending = ({ navigation }) => {

  useHeaderRight(navigation, "#292929")
  const [userDecks, setUserDecks] = useState([{}])
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      firestore().collection('decks').where("visibility", "==", "public").orderBy("createdAt").get().then((data) => {
        setUserDecks(data.docs.map((deck) => {
          return deck.data()
        }))
      })
    }
  }, [isFocused])

  const render = userDecks.map((deck) => (<DeckComponent key={deck.id} title={deck.name} navigate={navigation.navigate} params={deck} screen={"Ver Deck"} />))

  return (
    <SafeAreaView className="bg-white flex-1 px-6 pb-[90px]">
      <TextInput className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] my-3 px-4 rounded-full w-full" placeholder='Pesquisar...' placeholderTextColor={"#000"} />
      <ScrollView>
        <View className="flex-wrap flex-row">
          {render}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Trending