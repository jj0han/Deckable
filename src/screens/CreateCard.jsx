import React, { useState } from 'react'
import { View } from 'react-native'
import { FormBackgroungLayout, FormLayout } from '../layouts/forms'
import CardGradient from '../components/CardGradientComponent'
import PickerSelectComponent from '../components/PickerSelectComponent'
import { ButtonComponent } from '../components/buttons'

const CreateCard = () => {
  const [valor, setValor] = useState("")
  const typePlaceholder = { label: "Pergunta e Resposta", value: "QA" }
  const items = {
    types: [
      
      { label: "Multipla Escolha", value: "MC" },
    ],
  }

  return (
    <FormBackgroungLayout>
      <View className="grow justify-center w-full flex-row p-5">
        <CardGradient borderColor='#292929' />
        <View className="grow p-3">
          <PickerSelectComponent items={items.types} setValue={setValor} placeholder={typePlaceholder} label={"Tipo do Card"} white={true} />
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