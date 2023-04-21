import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { TabActions } from '@react-navigation/native';
import { FormBackgroungLayout, FormLayout } from '../layouts/forms'
import CardGradient from '../components/CardGradientComponent'
import { ButtonComponent } from '../components/buttons'
import QAComponent from '../components/cardTypes/QAComponent'
import { PickerSelectComponent } from '../components/inputs';

const CreateCard = ({ navigation }) => {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [type, setType] = useState("QA")
  const typePlaceholder = { label: "Pergunta e Resposta", value: "QA" }
  const items = {
    types: [
      { label: "Multipla Escolha", value: "MC" },
    ],
  }

  // redefinindo a rota para Home
  useEffect(() => {
    navigation.dispatch(TabActions.jumpTo('Home'));
  }, [])

  return (
    <FormBackgroungLayout>
      <View className="justify-center w-full flex-row p-5">
        <CardGradient borderColor='#292929' />
        <View className="grow p-3">
          <PickerSelectComponent items={items.types} setValue={setType} placeholder={typePlaceholder} label={"Tipo do Card"} white={true} />
        </View>
      </View>
      <FormLayout grow={1} >
        <SafeAreaView style={{ flex: 1 }} behavior='height'>
          {type === "QA" ? <QAComponent question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} /> : <Text></Text>}
          <View className="w-full items-center">
            <ButtonComponent title={"Adicionar carta"} />
          </View>
        </SafeAreaView>
      </FormLayout>
    </FormBackgroungLayout>
  )
}

export default CreateCard