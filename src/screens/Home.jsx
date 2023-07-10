import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import useHeaderRight from '../hooks/useHeaderRight'
import { DeckComponent, SearchInput } from '../components'
import { DARK_GRAY } from '../constants/colors/layoutColors'
import { PURPLE } from '../constants/colors/gradientColors'

const Home = ({ navigation }) => {
    const [userDecks, setUserDecks] = useState([{}])
    const [loading, setLoading] = useState(true)
    const isFocused = useIsFocused()
    useHeaderRight(navigation, DARK_GRAY)

    useEffect(() => {
        if (isFocused) {
            setLoading(true)
            firestore().collection('decks').where("uid", "==", auth().currentUser.uid).orderBy("createdAt", "desc").get().then((data) => {
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
                <View className="bg-[#292929] my-3 px-4 rounded-3xl w-full">
                    <Text className="font-black my-4 text-xl text-white">Revisar Hoje</Text>
                    <Text className="mb-4 text-white text-base">Você tem 1 revisão marcada para hoje!</Text>
                </View>
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

export default Home