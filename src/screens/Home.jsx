import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import useHeaderRight from '../hooks/useHeaderRight'
import { DeckComponent, SearchInput } from '../components'
import { DARK_GRAY } from '../constants/colors/layoutColors'
import { PURPLE } from '../constants/colors/gradientColors'
import Swiper from 'react-native-deck-swiper'
import { Chevron } from 'react-native-shapes'

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
        <SafeAreaView className="bg-white flex-1 pb-[90px]">
            <ScrollView>
                <View className="px-6">
                    <SearchInput placeholder={"Pesquisar..."} />
                </View>
                {
                    !loading &&
                    <View className="w-[100%] h-[130px] px-6 overflow-hidden">
                        <Swiper
                            backgroundColor='#ffffff00'
                            animateCardOpacity={true}
                            verticalSwipe={false}
                            cardIndex={0}
                            stackSize={ userDecks.length < 3 ? userDecks.length : 3}
                            cards={userDecks}
                            cardVerticalMargin={0}
                            cardHorizontalMargin={0}
                            infinite={true}
                            containerStyle={{
                                position: "relative",
                                flex: 1,
                            }}
                            cardStyle={{
                                width: "100%",
                            }}
                            renderCard={card => {
                                return (
                                    <TouchableOpacity onPress={() => {navigation.navigate("Ver Deck", card)}} activeOpacity={0.95} className="w-full h-[85px] bg-[#292929] rounded-2xl items-center justify-between border-white border-[2px] flex-row">
                                        <View className="m-4">
                                            <Text className="text-white text-lg font-bold">{card.name}</Text>
                                            <Text className="text-white text-xs">Você tem uma revisão marcada para hoje!</Text>
                                        </View>
                                        <View className="bg-white w-[30px] h-[30px] m-4 rounded-md justify-center">
                                            <Chevron size={2} rotate={-90}  color='#292929' style={{top: 5, left: 2}}/>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    </View>
                }
                {
                    loading ? 
                    <ActivityIndicator size={50} color={PURPLE} /> : 
                    <View className="flex-wrap flex-row px-6">
                        {render}
                    </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home