import React, { useState, useEffect } from 'react'
import { View, SafeAreaView } from 'react-native'
import { TabActions } from '@react-navigation/native'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import { BasicComponent, ButtonComponent, CardGradientComponent, PickerSelectComponent, QAComponent } from '../../components'

const CreateCard = ({ route, navigation }) => {
  const { deckID } = route.params
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [type, setType] = useState("BSC")
  const typePlaceholder = { label: "Básico", value: "BSC" }
  const items = {
    types: [
      { label: "Pergunta e Resposta", value: "QA" },
    ],
  }

  // redefinindo a rota para Home
  useEffect(() => {
    navigation.dispatch(TabActions.jumpTo('Home'));
  }, [])

  return (
    <FormBackgroundLayout>
      <View className="justify-center w-full flex-row p-5">
        <CardGradientComponent borderColor='#292929' />
        <View className="grow p-3">
          <PickerSelectComponent items={items.types} setValue={setType} placeholder={typePlaceholder} label={"Tipo do Card"} white={true} />
        </View>
      </View>
      <FormLayout grow={1} >
        <SafeAreaView style={{ flex: 1 }} behavior='height'>
          {type === "QA" ? <QAComponent question={question} setQuestion={setQuestion} answer={answer} setAnswer={setAnswer} /> : <BasicComponent question={question} setQuestion={setQuestion} />}
          <View className="w-full items-center">
            <ButtonComponent deckID={deckID} type={type} answer={answer} question={question} title={"Adicionar carta"} />
          </View>
        </SafeAreaView>
      </FormLayout>
    </FormBackgroundLayout>
  )
}

export default CreateCard