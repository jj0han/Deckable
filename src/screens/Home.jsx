import { View, Text, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import useHeaderRight from '../hooks/useHeaderRight'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { DeckComponent } from '../components'
import { useIsFocused } from '@react-navigation/native'

const Home = ({ navigation }) => {
    // const { readUserData } = useContext(AuthContext)
    const [userDecks, setUserDecks] = useState([{}])
    const isFocused = useIsFocused()
    useHeaderRight(navigation, "#292929")

    useEffect(() => {
        if(isFocused) {
            firestore().collection('decks').where("uid", "==", auth().currentUser.uid).orderBy("createdAt").get().then((data) => {
                setUserDecks(data.docs.map((deck) => {
                    return deck.data()
                }))
            })
        }
    }, [isFocused])

    console.log(userDecks)

    const render = userDecks.map((deck) => <DeckComponent key={deck.id} title={deck.name} navigate={navigation.navigate} params={deck} screen={"Ver Deck"} />)

    return (
        <SafeAreaView className="bg-white flex-1 px-6 pb-[90px]">
            <TextInput className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] my-3 px-4 rounded-full w-full" placeholder='Pesquisar...' placeholderTextColor={"#000"} />
            <View className="bg-[#292929] my-3 px-4 rounded-3xl w-full">
                <Text className="font-black my-4 text-xl text-white">Revisar Hoje</Text>
                <Text className="mb-4 text-white text-base">Você tem 1 revisão marcada para hoje!</Text>
            </View>
            <ScrollView>
                <View className="flex-wrap flex-row justify-start">
                    {render}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home