import { Text, View, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import useHeaderRight from '../../hooks/useHeaderRight'
import { WHITE } from '../../constants/colors/layoutColors'
import { EditCardComponent } from '../../components'
import { CreateIcon } from '../../assets/images/svgs'

export default function EditCards({ route, navigation }) {
    useHeaderRight(navigation, WHITE)
    const { name, id, uid, createdBy, createdAt, cards } = route.params

    const render = cards.map((card) => {
       return <EditCardComponent key={card.id} title={card.content.question} createdAt={card.createdAt} /> 
    }) 

    return (
        <FormBackgroundLayout>
            <View className="flex-1 flex-row mx-4 my-4 bg-[#3A3A3A] text-black border-[#4E4E4E] border-[1px] rounded-full">
                <TextInput className="w-[87%] px-4" placeholder='Pesquisar...' placeholderTextColor={WHITE} />
                <View className="h-full flex-1 justify-center items-center"><CreateIcon/></View>
            </View>
            <FormLayout>
                <View className="flex-1 flex-row">
                    {render}
                </View>
            </FormLayout>
        </FormBackgroundLayout>
    )
}