import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Calendar, } from 'react-native-calendars';
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { ButtonDialogueComponent, ButtonNavComponent, DeckComponent } from '../../components'
import { AuthContext } from '../../context/AuthContext'
import { WHITE } from '../../constants/colors/layoutColors';

const ViewDeck = ({ route, navigation }) => {
    useHeaderRight(navigation, WHITE)
    const { name, id, uid, createdBy, createdAt, cards } = route.params
    const { removeUserDeck } = useContext(AuthContext)
    const [selected, setSelected] = useState('');

    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formatDate = `${yyyy}-${mm}-${dd}`

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: name
    //     })
    // }, [navigation])

    return (
        <FormBackgroundLayout>
            <View className="flex flex-row w-full px-5 pt-5 pb-10">
                <DeckComponent viewOnly={true} title={name} borderColor='#292929' />
                <View className="grow px-5">
                    <Text className="text-white text-base font-bold">Por: {createdBy}</Text>
                    <ButtonNavComponent fullWidth={true} title={"Editar Cartas"} navigation={navigation} screen={"Editar Cartas"} params={{ name, id, uid, createdBy, createdAt, cards }} />
                    <ButtonNavComponent fullWidth={true} title={"Editar Deck"} />
                    <ButtonDialogueComponent time={300} id={id} useRemove={true} removeUserDeck={removeUserDeck} uid={uid} screen={"Home"} navigation={navigation} fullWidth={true} title={"Excluir Deck"} />
                </View>
            </View>
            <FormLayout grow={1}>
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
                    <ButtonNavComponent title={"Revisar"} navigation={navigation} screen={"Swipe Teste"} params={{ name, id, uid, createdBy, createdAt, cards }} />
                </View>
            </FormLayout>
        </FormBackgroundLayout>
    )
}

export default ViewDeck