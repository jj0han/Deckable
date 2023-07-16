import { Text, View, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import useHeaderRight from '../hooks/useHeaderRight'
import { DeckComponent, SearchInput } from '../components'
import { PURPLE } from '../constants/colors/gradientColors'

const Trending = ({ navigation }) => {

  useHeaderRight(navigation, "#292929")
  const [userDecks, setUserDecks] = useState([{}])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('decks')
      .where("visibility", "==", "public")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        setLoading(true)
        const decks = []
        querySnapshot.forEach((doc) => {
          decks.push(doc.data())
        })
        setUserDecks(decks)
        setLoading(false)
      })

    return () => unsubscribe()
  }, [])

  const render = userDecks.map((deck) => (<DeckComponent key={deck.id} title={deck.name} navigate={navigation.navigate} params={deck} screen={"Ver Deck de Usuário"} />))

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