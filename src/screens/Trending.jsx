import { Text, View, SafeAreaView, ScrollView, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import useHeaderRight from '../hooks/useHeaderRight'
import { DeckComponent, SearchInput } from '../components'
import { PURPLE } from '../constants/colors/gradientColors'

const Trending = ({ navigation }) => {

  useHeaderRight(navigation, "#292929")
  const [userDecks, setUserDecks] = useState([{}])
  const [loading, setLoading] = useState(true)
  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      setLoading(true)
      firestore().collection('decks').where("visibility", "==", "public").orderBy("createdAt").get().then((data) => {
        setUserDecks(data.docs.map((deck) => {
          return deck.data()
        }))
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [isFocused])

  const render = userDecks.map((deck) => (<DeckComponent key={deck.id} title={deck.name} navigate={navigation.navigate} params={deck} screen={"Ver Deck"} />))

  return (
    <SafeAreaView className="bg-white flex-1 px-6 pb-[90px]">
      <ScrollView>
      <SearchInput placeholder={"Pesquisar..."} />
        {
          loading ? 
          <ActivityIndicator size={50} color={PURPLE} /> : 
          <View className="flex-wrap flex-row">
              {render}
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Trending