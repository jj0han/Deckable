import { View, Text } from 'react-native'
import React from 'react'
import { TextInputComponent } from '../inputs'


const QAComponent = ({ question, setQuestion, answer, setAnswer }) => {
  return (
    <View className="gap-y-5 mb-10">
      <View>
        <Text className="text-black text-base font-semibold mb-3">PERGUNTA</Text>
        <TextInputComponent placeholder={"Digite sua pergunta aqui..."} multiline={true} value={question} setHandleText={setQuestion} />
      </View>
      <View>
        <Text className="text-black text-base font-semibold mb-3">RESPOSTA</Text>
        <TextInputComponent placeholder={"Digite sua resposta aqui..."} multiline={true} value={answer} setHandleText={setAnswer} />
      </View>
    </View>
  )
}

export default QAComponent