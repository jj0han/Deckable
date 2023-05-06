import React from 'react'
import { View, Text } from 'react-native'
import { TextInputComponent } from '../../components'


const BasicComponent = ({ question, setQuestion, answer, setAnswer }) => {
    return (
        <View className="gap-y-5 mb-10">
            <View>
                <Text className="text-black text-base font-semibold mb-3">PERGUNTA</Text>
                <TextInputComponent placeholder={"Digite sua pergunta aqui..."} multiline={true} value={question} setHandleText={setQuestion} />
            </View>
        </View>
    )
}

export default BasicComponent