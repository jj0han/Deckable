import { Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { WHITE } from '../../constants/colors/layoutColors'
import { EditCardComponent } from '../../components'
import { CreateIcon } from '../../assets/images/svgs'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { PURPLE } from '../../constants/colors/gradientColors'

export default function EditCards({ route, navigation }) {
    const [userCards, setUserCards] = useState([{}])
    const [loading, setLoading] = useState(true)
    const { name, id, uid, createdBy, createdAt, cards } = route.params ?? {}
    const isFocused = useIsFocused()
    useHeaderRight(navigation, WHITE)

    const handlePress = () => {
        navigation.navigate('Criar Carta', {
            deckID: id,
            cards,
        })
    }

    useEffect(() => {
        if (isFocused) {
            setLoading(true)
            firestore()
                .collection('decks')
                .doc(id)
                .get()
                .then((data) => { setUserCards(data.data().cards) })
                .finally(() => { setLoading(false) })
        }
    }, [isFocused])

    const render = userCards.map((card) => {
        // console.log(card)
        return <EditCardComponent key={card.id} deckID={id} navigation={navigation} title={card.content ? card.content.question : ""} createdAt={card.createdAt} />
    })

    return (
        <FormBackgroundLayout>
            <View className="flex-1 flex-row mx-4 my-4 bg-[#3A3A3A] text-black border-[#4E4E4E] border-[1px] rounded-full">
                <TextInput className="w-[87%] px-4" placeholder='Pesquisar...' placeholderTextColor={'#fff'} />
                <TouchableOpacity onPress={handlePress} className="h-full flex-1 justify-center items-center">
                    <CreateIcon />
                </TouchableOpacity>
            </View>
            <FormLayout>
                <View className="flex-1 flex-row flex-wrap justify-center">
                    {loading ? <ActivityIndicator size={50} color={PURPLE} /> : render}
                </View>
            </FormLayout>
        </FormBackgroundLayout>
    )
}