import React, { useContext, useState, useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { Calendar, } from 'react-native-calendars';
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { ButtonDialogueComponent, ButtonNavComponent, DeckComponent } from '../../components'
import { AuthContext } from '../../context/AuthContext'
import { WHITE } from '../../constants/colors/layoutColors';
import firestore from '@react-native-firebase/firestore'
import { useIsFocused } from '@react-navigation/native';
import { PURPLE } from '../../constants/colors/gradientColors';

const ViewDeck = ({ route, navigation }) => {
    useHeaderRight(navigation, "#FFF")
    const { name, id, uid, createdBy, createdAt, visibility, type } = route.params
    const { removeUserDeck } = useContext(AuthContext)
    const [selected, setSelected] = useState('')
    const [deckData, setDeckData] = useState([{}])
    const [cards, setCards] = useState([{}])
    const [loading, setLoading] = useState(true)
    const isFocused = useIsFocused()

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formatDate = `${yyyy}-${mm}-${dd}`

    useEffect(() => {
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
                        <View className="grow px-5">
                            <Text className="text-white text-base font-bold">Por: {createdBy}</Text>
                            <ButtonNavComponent fullWidth={true} title={"Cartas"} navigation={navigation} screen={"Editar Cartas"} params={{ id }} />
                            <ButtonNavComponent fullWidth={true} title={"Editar Deck"} navigation={navigation} screen={"Editar Deck"} params={{ name, visibility, type, id }} />
                            <ButtonDialogueComponent time={300} id={id} useRemove={true} removeUserDeck={removeUserDeck} uid={uid} screen={"Home"} navigation={navigation} fullWidth={true} title={"Excluir Deck"} />
                        </View>
                    </View>
            }
            <FormLayout grow={1}>
                {loading ?
                    <ActivityIndicator size={50} color={PURPLE} className="p-16" /> :
                    <>
                        <Calendar
                            style={{
                                marginBottom: 30,
                            }}
                            current={formatDate}
                            onDayPress={day => {
                                setSelected(day.dateString);
                            }}
                            hideArrows={true}
                            markedDates={{
                                [selected]: { marked: true },
                                '2023-05-31': { selected: true, selectedColor: "#292929" },
                                '2023-06-01': { selected: true, selectedColor: "#292929" },
                                '2023-06-02': { selected: true, selectedColor: "#292929" },
                                '2023-06-03': { selected: true, selectedColor: "#292929" },
                                '2023-06-04': { selected: true, selectedColor: "#292929" },
                            }}
                        />

                        <View className="justify-center items-center">
                            <ButtonNavComponent title={cards.length === 0 ? "Adicione Cartas" : "Revisar"} EnableGlow={true} navigation={navigation} screen={cards.length === 0 ? "Editar Cartas" : "Swipe Teste"} params={{ name, id, uid, createdBy, createdAt, cards }} />
                        </View>
                    </>
                }
            </FormLayout>
        </FormBackgroundLayout>
    )
}

export default ViewDeck