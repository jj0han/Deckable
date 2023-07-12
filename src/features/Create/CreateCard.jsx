import React, { useState, useEffect, useContext } from 'react'
import { View, Alert } from 'react-native'
import { TabActions } from '@react-navigation/native'
import { FormBackgroundLayout, FormLayout } from '../../layouts/forms'
import { CardGradientSwipe, FormikButton, FormikForm, FormikFormField, PickerSelectComponent } from '../../components'
import { Field } from 'formik'
import { AuthContext } from '../../context/AuthContext'
import * as Yup from 'yup'
import { editCard } from '../../services/firestore'

const CreateCard = ({ route, navigation }) => {
  const { cardID, deckID, content, uid, index, type, createdAt } = route.params?? {}
  const { addCard } = useContext(AuthContext)
  const [isFlipped, setIsFlipped] = useState(false)
  const [cardType, setType] = useState("BSC")
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

  const validationQASchema = Yup.object().shape({
    question: Yup.string()
      .required("Digite uma pergunta")
      .label("question"),
    answer: Yup.string()
      .required("Digite uma resposta")
      .label("answer"),
  })

  const validationBasicSchema = Yup.object().shape({
    question: Yup.string()
      .required("Digite uma pergunta")
      .label("question"),
  })

  return (
    <FormBackgroundLayout>
      <FormikForm
        initialValues={{
          question: content ? content.question : '',
          answer: content ? content.answer : '',
        }}
        validationSchema={cardType == "QA" ? validationQASchema : validationBasicSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={
          (values, { resetForm }) => {
            // console.log(values)
            if (content) {
              editCard(values.question, values.answer, cardType, cardID, deckID, index, uid, createdAt)
              Alert.alert("Card edited")
            } else {
              addCard(values.question, values.answer, cardType, deckID)
              resetForm()
              Alert.alert("Card Added")
            }
          }
        }
      >
        <View className="justify-center w-full flex-row p-5">
          <View className="grow">
            <CardGradientSwipe isFlipped={isFlipped} />
          </View>
          <View className="grow-[100] p-3">
            <PickerSelectComponent items={items.types} setValue={setType} placeholder={typePlaceholder} label={"Tipo do Card"} white={true} />
          </View>
        </View>
        <FormLayout>
            <Field component={FormikFormField} name={'question'} placeholder={'Digite sua pergunta'} onFocus={() => setIsFlipped(false)} />
            {cardType == "QA" && <Field component={FormikFormField} name={'answer'} placeholder={'Digite sua resposta'} onFocus={() => setIsFlipped(true)} />}
            <FormikButton title={content ? 'Salvar carta' : 'Adicionar carta'} EnableGlow={true} />
        </FormLayout>
      </FormikForm>
    </FormBackgroundLayout>
  )
}

export default CreateCard