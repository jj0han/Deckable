import React, { useEffect, useContext } from 'react'
import { View, Text } from 'react-native'
import { FormBackgroungLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { ButtonComponent, ButtonDialogueComponent, ButtonNavComponent, DeckComponent } from '../../components'
import { AuthContext } from '../../context/AuthContext'

const ViewDeck = ({ route, navigation }) => {
    useHeaderRight(navigation, "#ffffff")
    const { name, id } = route.params
    const { removeUserDeck } = useContext(AuthContext)

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
                    <Text className="text-white text-base font-bold">Por: Mim mesmo</Text>
                    <ButtonNavComponent fullWidth={true} title={"Editar Deck"} />
                    <ButtonNavComponent fullWidth={true} title={"Editar Cards"} />
                    <ButtonDialogueComponent time={300} id={id} useRemove={true} removeUserDeck={removeUserDeck} screen={"Home"} navigation={navigation} fullWidth={true} title={"Excluir Deck"} />
                </View>
            </View>
            <FormLayout grow={1}>
                <View className="justify-center items-center">
                    <ButtonNavComponent title={"Revisar"} />
                </View>
            </FormLayout>
        </FormBackgroungLayout>
    )
}

export default ViewDeck