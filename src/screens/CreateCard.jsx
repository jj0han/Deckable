import { View } from 'react-native'
import React, { useState } from 'react'
import FormBackgroungLayout from '../layouts/FormBackgroungLayout'
import FormLayout from '../layouts/FormLayout'
import CardGradient from '../layouts/CardGradient'
import PickerSelectComponent from '../components/PickerSelectComponent'
import ButtonComponent from '../components/ButtonComponent'

const CreateCard = () => {
  const [valor, setValor] = useState("")
  const placeholderTipo = { label: "Pergunta e Resposta", value: "QA" }
  const placeholderDeck = { label: "Selecione...", value: null }
  const items = {
    tipos: [
      
      { label: "Multipla Escolha", value: "MC" },
    ],
    Deck: [
      { label: "Público", value: "public" }
    ]
  }

  return (
    <FormBackgroungLayout>
      <View className="grow justify-center w-full flex-row p-5">
        <CardGradient borderColor='#292929' />
        <View className="grow p-3">
          <PickerSelectComponent items={items.tipos} setValue={setValor} placeholder={placeholderTipo} label={"Tipo"} white={true} />
          <PickerSelectComponent items={items.Deck} setValue={setValor} placeholder={placeholderDeck} label={"Deck"} white={true} />
        </View>
      </View>
      <FormLayout>
        <View className="w-full items-center">
          <ButtonComponent title={"Adicionar carta"} />
        </View>
      </FormLayout>
    </FormBackgroungLayout>
  )
}

export default CreateCard