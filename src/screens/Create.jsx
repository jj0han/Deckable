import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Field } from 'formik'
import uuid from 'react-native-uuid'
import useHeaderRight from '../hooks/useHeaderRight'
import { FormBackgroundLayout, FormLayout } from '../layouts/forms'
import { DeckFormikComponent, FormikButton, FormikForm, FormikFormField, PickerSelectComponent } from '../components'
import { WHITE } from '../constants/colors/layoutColors'
import { createDeck, updateDeck } from '../services/firestore'
import { createDeckSchema } from '../constants/schemas/yupSchemas'
import { getDeckType } from '../utils/getDeckType'
import { getDeckVisibility } from '../utils/getDeckVisibility'

const Create = ({ navigation, route }) => {
  const { name, visibility, type, id } = route.params?? {}

  const deckTypes = [
    { label: "Genérico", value: "gn" },
    { label: "Ciências Exatas", value: "ec" },
    { label: "Ciências da Natureza", value: "nc" },
    { label: "Linguagens", value: "lg" },
    { label: "Ciências Humanas", value: "hc" },
  ]

const deckVisibility = [
  { label: "Todos", value: "public" },
  { label: "Somente eu", value: "private" },
]

  const { updatedDeckPlaceholder, updatedDeckTypes } = getDeckType(type, deckTypes)
  const { updatedDeckVisibilityPlaceholder, updatedDeckVisibility } = getDeckVisibility(visibility, deckVisibility)

  const [visibilityOptions, setVisibilityOptions] = useState(updatedDeckVisibilityPlaceholder[0].value)
  const [typeOptions, setTypeOptions] = useState(updatedDeckPlaceholder[0].value)

  useHeaderRight(navigation, "#FFF")

  return (
    <FormBackgroundLayout>
      <FormikForm
        initialValues={{
          name: name ? name : ""
        }}
        onSubmit={
          (values, { resetForm }) => {
            console.log(visibilityOptions, typeOptions)
            if (route.params) {
              updateDeck(values.name.trim(), id, visibilityOptions, typeOptions)
              Alert.alert("Saved!")
            } else {
              const generatedID = uuid.v4()
              createDeck(values.name.trim(), generatedID, visibilityOptions, typeOptions)
              navigation.navigate('Criar Carta', {
                deckID: generatedID,
              })
              resetForm()
            }
          }
        }
        validationSchema={createDeckSchema}
        validateOnBlur={false}
        validateOnChange={false}
      >
        <View className="grow justify-center items-center py-5">
          <DeckFormikComponent placeholder={'Digite um nome'} borderColor='#292929' />
        </View>
        <FormLayout>
          <View className="w-full mb-5">
            <Field component={FormikFormField} name={'name'} placeholder={'Digite um nome'} />
            <View className="w-full px-4 mt-4">
              <PickerSelectComponent items={updatedDeckVisibility[0]} setValue={setVisibilityOptions} placeholder={updatedDeckVisibilityPlaceholder[0]} label={"Quem vai poder ver meu Deck?"} />
            </View>
            <View className="w-full px-4 mt-4">
              <PickerSelectComponent items={updatedDeckTypes[0]} setValue={setTypeOptions} placeholder={updatedDeckPlaceholder[0]} label={"Meu Deck vai ser sobre..."} />
            </View>
            <FormikButton title={route.params ? "Salvar" : "Criar Deck"} EnableGlow={true} />
          </View>
        </FormLayout>
      </FormikForm>
    </FormBackgroundLayout>
  )
}

export default Create