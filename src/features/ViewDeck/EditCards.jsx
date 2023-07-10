import { Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { WHITE } from '../../constants/colors/layoutColors'
import { EditCardComponent, PickerSelectComponent, SearchInput } from '../../components'
import { CreateIcon } from '../../assets/images/svgs'
import { useIsFocused } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import { PURPLE } from '../../constants/colors/gradientColors'

export default function EditCards({ route, navigation }) {
    useHeaderRight(navigation, "#FFF")
    const isFocused = useIsFocused()
    const [userCards, setUserCards] = useState([{}])
    const [loading, setLoading] = useState(true)
    const { id } = route.params ?? {}
    const [pickerType, setPickerType] = useState("NewestDate")
    const items = {
        types: [
            { label: "Data mais recente", value: "NewestDate" },
            { label: "Data mais antiga", value: "OldestDate" },
        ],
    }

    const handlePress = () => {
        const cards = userCards.cards
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
                .finally(() => {
                    setLoading(false)
                })
        }
    }, [isFocused])

    const render = userCards.map((card) => {
        // console.log(card)
        return <EditCardComponent key={card.id} deckID={id} navigation={navigation} title={card.content ? card.content.question : ""} createdAt={card.createdAt} />
    })

    return (
        <FormBackgroundLayout>
            <View className="px-4">
                <SearchInput placeholder={"Pesquisar..."} dark={true}>
                    <TouchableOpacity onPress={handlePress} className="h-full justify-center items-center px-2">
                        <CreateIcon />
                    </TouchableOpacity>
                </SearchInput>
            </View>
            <View className="flex-1 flex-row mx-4 my-4 items-center justify-between">
                <PickerSelectComponent white={true} label='Ordenar' labelAtTop={false} items={items.types} setValue={setPickerType} />
                <Text className="text-white">{userCards.length} Cartas Visíveis</Text>
            </View>
            <FormLayout>
                <View className="flex-1 flex-row flex-wrap justify-center">
                    {loading ? <ActivityIndicator size={50} color={PURPLE} /> : pickerType === "OldestDate" ? render : render.reverse()}
                </View>
            </FormLayout>
        </FormBackgroundLayout>
    )
}