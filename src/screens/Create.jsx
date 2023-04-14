import { View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import useHeaderRight from '../hooks/useHeaderRight'
import DeckComponent from '../components/DeckComponent'
import ButtonNavComponent from '../components/ButtonNavComponent'
import FormLayout from '../layouts/FormLayout'
import FormBackgroungLayout from '../layouts/FormBackgroungLayout'
import PickerSelectComponent from '../components/PickerSelectComponent'

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
        <View className="w-full gap-y-5">
          <TextInput onChange={(e) => setDeckTitle(e.nativeEvent.text)} value={deckTitle} placeholder='Digite um nome' placeholderTextColor={"#1e1e1e"} className="bg-[#F7F7F7] text-black border-[#D7D7D7] border-[1px] px-4 rounded-2xl w-full" />
          <View className="w-full px-4">
            <PickerSelectComponent items={items} setValue={setValor} placeholder={placeholder} label={"Visibilidade"} />
          </View>
        </View>
        <View className="w-full items-center">
          <ButtonNavComponent title={"Criar"} navigation={navigation} screen={"Criar Carta"} />
        </View>
      </FormLayout>
    </FormBackgroungLayout>
  )
}

export default Create