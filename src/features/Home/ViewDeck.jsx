import React, { useContext, useState } from 'react'
import { View, Text } from 'react-native'
import { Calendar, } from 'react-native-calendars';
import { FormBackgroungLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { ButtonDialogueComponent, ButtonNavComponent, DeckComponent } from '../../components'
import { AuthContext } from '../../context/AuthContext'
import { DARK_BLUE, PINK } from '../../constants/colors/gradientColors';

const ViewDeck = ({ route, navigation }) => {
    useHeaderRight(navigation, "#ffffff")
    const { name, id, uid, createdBy, createdAt } = route.params
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
        <FormBackgroungLayout>
            <View className="flex flex-row w-full px-5 pt-5 pb-10">
                <DeckComponent viewOnly={true} title={name} borderColor='#292929' />
                <View className="grow px-5">
                    <Text className="text-white text-base font-bold">Por: {createdBy}</Text>
                    <ButtonNavComponent fullWidth={true} title={"Editar Deck"} />
                    <ButtonNavComponent fullWidth={true} title={"Editar Cards"} />
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
                    markingType={'period'}
                    markedDates={{
                        [selected]: { marked: true },
                        '2023-05-23': { startingDay: true, color: DARK_BLUE, textColor: 'white' },
                        '2023-05-24': { color: '#70d7c7', textColor: 'white' },
                        '2023-05-25': { color: '#70d7c7', textColor: 'white'},
                        '2023-05-26': { color: '#70d7c7', textColor: 'white' },
                        '2023-05-27': { endingDay: true, color: DARK_BLUE, textColor: 'white' },
                        '2023-05-31': { startingDay: true, color: '#50cebb', textColor: 'white' },
                        '2023-06-01': { color: '#70d7c7', textColor: 'white' },
                        '2023-06-02': { disabled: true, color: '#70d7c7', textColor: 'white'},
                        '2023-06-03': { color: '#70d7c7', textColor: 'white' },
                        '2023-06-04': { endingDay: true, color: '#50cebb', textColor: 'white' },
                    }}
                />
                <View className="justify-center items-center">
                    <ButtonNavComponent title={"Revisar"} />
                </View>
            </FormLayout>
        </FormBackgroungLayout>
    )
}

export default ViewDeck