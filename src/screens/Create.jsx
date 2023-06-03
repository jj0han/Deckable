import React, { useContext, useState } from 'react'
import { View } from 'react-native'
import { useFormik } from 'formik'
import useHeaderRight from '../hooks/useHeaderRight'
import { FormBackgroundLayout, FormLayout } from '../layouts/forms'
import { AuthContext } from '../context/AuthContext'
import { DeckComponent, FormButtonComponent, FormikInputComponent, PickerSelectComponent } from '../components'
import uuid from 'react-native-uuid'
import { WHITE } from '../constants/colors/layoutColors'

const Create = ({ navigation }) => {
  const { addUserDeck } = useContext(AuthContext)
  const visibilityPlaceholder = { label: "Todos", value: "public" }
  const typePlaceholder = { label: "Genérico", value: "gn" }

  const [visibilityOptions, setVisibilityOptions] = useState(visibilityPlaceholder.value)
  const [typeOptions, setTypeOptions] = useState(typePlaceholder.value)

  const visibilityItems = [
    { label: "Somente eu", value: "private" },
  ]
  const typeItems = [
    { label: "Ciências Exatas", value: "ec" },
    { label: "Ciências da Natureza", value: "nc" },
    { label: "Linguagens", value: "lg" },
    { label: "Ciências Humanas", value: "hc" },
  ]

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      const generatedID = uuid.v4()
      // storeData(values.name.trim(), generatedID, visibilityOptions, typeOptions)
      addUserDeck(values.name.trim(), generatedID, visibilityOptions, typeOptions)
      navigation.navigate('Criar Carta', {
        deckID: generatedID,
      })
    },
    validate: (values) => {
      const errors = {}
      if (!values.name) {
        errors.name = 'Digite um nome para o Deck'
      } else if (!/^[a-zA-Z0-9À-ÿ\s!@#$%^&*()_+{}|:?><~?><~,./]{1,40}$/.test(values.name)) {
        errors.name = 'O nome deve ter no máximo 40 caracteres'
      }
      return errors
    },
  })

  useHeaderRight(navigation, WHITE)

  return (
    <FormBackgroundLayout>
      <View className="grow justify-center items-center py-5">
        <DeckComponent viewOnly={true} title={formik.values.name ? formik.values.name.trim() : "Nome do seu Deck"} borderColor='#292929' />
      </View>
      <FormLayout>
        <View className="w-full mb-5">
          <FormikInputComponent formik={formik} name={'name'} placeholder={'Digite um nome'} formikValue={formik.values.name} formikErrors={formik.errors.name} />
          <View className="w-full px-4 mt-4">
            <PickerSelectComponent items={visibilityItems} setValue={setVisibilityOptions} placeholder={visibilityPlaceholder} label={"Quem vai poder ver meu Deck?"} />
          </View>
          <View className="w-full px-4 mt-4">
            <PickerSelectComponent items={typeItems} setValue={setTypeOptions} placeholder={typePlaceholder} label={"Meu Deck vai ser sobre..."} />
          </View>
        </View>
        <View className="w-full items-center">
          <FormButtonComponent title={"Criar Deck"} action={formik.handleSubmit} />
        </View>
        {/* Espaçamento */}
        <View className="h-[100px]" />
      </FormLayout>
    </FormBackgroundLayout>
  )
}

export default Create