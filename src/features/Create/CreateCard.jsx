import React, { useState, useEffect, useContext } from 'react'
import { View, SafeAreaView, Alert } from 'react-native'
import { TabActions } from '@react-navigation/native'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import { BasicComponent, CardGradientComponent, FormButtonComponent, PickerSelectComponent, QAComponent } from '../../components'
import { useFormik } from 'formik'
import { AuthContext } from '../../context/AuthContext'

const CreateCard = ({ route, navigation }) => {
  const { deckID } = route.params
  const { addCard } = useContext(AuthContext)
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

  const formik = useFormik({
    initialValues: {
      question: '',
      answer: '',
    },
    onSubmit: (values, { resetForm }) => {
      addCard(values.question, values.answer, type, deckID)
      resetForm()
      Alert.alert("Card Added")
    },
    validateOnChange: false,
    validateOnBlur: false,
    validate: (values) => {
      const errors = {}
      if (type === "QA") {
        if (!values.question) {
          errors.question = 'Digite um nome para o Deck'
        }
        if (!values.answer) {
          errors.answer = 'Digite um nome para o Deck'
        }
      } else {
        if (!values.question) {
          errors.question = 'Digite um nome para o Deck'
        }
      }
      return errors
    },
  })

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
          {type === "QA" ? <QAComponent formik={formik} /> : <BasicComponent formik={formik} />}
          <View className="w-full items-center">
            <FormButtonComponent title={"Adicionar carta"} action={formik.handleSubmit} />
          </View>
        </SafeAreaView>
      </FormLayout>
    </FormBackgroundLayout>
  )
}

export default CreateCard