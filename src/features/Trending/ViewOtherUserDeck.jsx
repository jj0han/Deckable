import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import useHeaderRight from '../../hooks/useHeaderRight'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import { ButtonNavComponent, DeckComponent } from '../../components'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { PURPLE } from '../../constants/colors/gradientColors'

const ViewOtherUserDeck = ({ route, navigation }) => {
    useHeaderRight(navigation, "#FFF")
    const { name, id, uid, createdBy, createdAt, visibility, type } = route.params
    const [loading, setLoading] = useState(true)
    const isFocused = useIsFocused()
    const [selected, setSelected] = useState('')
    const [deckData, setDeckData] = useState([{}])
    const [cards, setCards] = useState([{}])

    const date = new Date(createdAt)

    useEffect(() => {
        navigation.setOptions({ title: `Deck de ${createdBy}` })
        if (isFocused) {
            setLoading(true)
            firestore()
                .collection('decks')
                .doc(id)
                .get()
                .then((data) => {
                    setDeckData(data.data())
                    setCards(data.data().cards)
                    // console.log(cards)
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [isFocused])

  return (
    <FormBackgroundLayout>
            {
                loading ?
                    <ActivityIndicator size={50} color={"#FFF"} className="p-16" /> :
                    <View className="flex flex-row w-full px-5 pt-5 pb-10">
                        <DeckComponent viewOnly={true} title={deckData.name} borderColor='#292929' />
                        <View className="grow px-5 justify-between">
                            <View className="gap-2">
                                <Text className="text-white text-base font-bold">Por: {createdBy}</Text>
                                <Text className="text-white text-base font-bold">Tipo: {deckData.type}</Text>
                                <Text className="text-white text-base font-bold">Criado em: {date.toLocaleDateString('pt-BR')}</Text>
                            </View>
                            <ButtonNavComponent fullWidth={true} title={"Cartas"} navigation={navigation} screen={"Editar Cartas"} params={{ id }} />
                        </View>
                    </View>
            }
            <FormLayout grow={1}>
                {loading ?
                    <ActivityIndicator size={50} color={PURPLE} className="p-16" /> :
                    <>
                        <View className="justify-center items-center">
                            <ButtonNavComponent title={"Importar Deck"} EnableGlow={true} navigation={navigation} screen={cards.length === 0 ? "Editar Cartas" : "Swipe Teste"} params={{ name, id, uid, createdBy, createdAt, cards }} />
                        </View>
                    </>
                }
            </FormLayout>
        </FormBackgroundLayout>
  )
}

export default ViewOtherUserDeck