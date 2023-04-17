import { View } from 'react-native'
import React, { useState } from 'react'
import useHeaderRight from '../hooks/useHeaderRight'
import DeckComponent from '../components/DeckComponent'
import { ButtonNavComponent } from '../components/buttons'
import { FormBackgroungLayout, FormLayout } from '../layouts/forms'
import PickerSelectComponent from '../components/PickerSelectComponent'
import TextInputComponent from '../components/TextInputComponent'

const Create = ({ navigation }) => {
  const [deckTitle, setDeckTitle] = useState("")
  const [valor, setValor] = useState("")
  const placeholder = {
    label: "Selecione...",
    value: null,
  }
  const items = [
    { label: "Público", value: "public" },
    { label: "Privado", value: "private" },
  ]

  useHeaderRight(navigation, "#ffffff")

  return (
    <FormBackgroungLayout>
      <View className="grow justify-center items-center">
        <DeckComponent title={deckTitle ? deckTitle : "Nome do seu Deck"} borderColor='#292929' />
      </View>
      <FormLayout>
        <View className="w-full mb-5">
          <TextInputComponent value={deckTitle} setHandleText={setDeckTitle} placeholder={"Digite um nome"} />
          <View className="w-full px-4 mt-4">
            <PickerSelectComponent items={items} setValue={setValor} placeholder={placeholder} label={"Visibilidade"} />
          </View>
        </View>
        <View className="w-full items-center">
          <ButtonNavComponent title={"Criar Deck"} navigation={navigation} screen={"Criar Carta"} />
        </View>
        {/* Espaçamento */}
        <View className="h-[100px]" />
      </FormLayout>
    </FormBackgroungLayout>
  )
}

export default Create