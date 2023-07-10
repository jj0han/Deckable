import React, { useContext, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { Field } from 'formik'
import uuid from 'react-native-uuid'
import useHeaderRight from '../hooks/useHeaderRight'
import { FormBackgroundLayout, FormLayout } from '../layouts/forms'
import { AuthContext } from '../context/AuthContext'
import { DeckFormikComponent, FormikButton, FormikForm, FormikFormField, PickerSelectComponent } from '../components'
import { WHITE } from '../constants/colors/layoutColors'
import * as Yup from 'yup'
import { editDeck } from '../services/firestore'

const Create = ({ navigation, route }) => {
  const { addUserDeck } = useContext(AuthContext)
  const { name, visibility, type, id } = route.params?? {}
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

  useHeaderRight(navigation, "#FFF")

  console.log(visibility, type)

  useEffect(() => {
    visibility && setVisibilityOptions(visibility)
    type && setTypeOptions(type)

    console.log(typeOptions)
  }, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z0-9À-ÿ\s!@#$%^&*()_+{}|:?><~?><~,./]{1,40}$/, "O nome deve ter no máximo 40 caracteres")
      .required("Digite um nome para o Deck")
      .label("name"),
  })

  return (
    <FormBackgroundLayout>
      <FormikForm
        initialValues={{
          name: name ? name : ""
        }}
        onSubmit={
          (values, { resetForm }) => {
            if (route.params) {
              editDeck(values.name.trim(), id, visibilityOptions, typeOptions)
              Alert.alert("Saved!")
            } else {
              const generatedID = uuid.v4()
              addUserDeck(values.name.trim(), generatedID, visibilityOptions, typeOptions)
              navigation.navigate('Criar Carta', {
                deckID: generatedID,
              })
              resetForm()
            }
          }
        }
        validationSchema={validationSchema}
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
              <PickerSelectComponent items={visibilityItems} setValue={setVisibilityOptions} placeholder={visibilityPlaceholder} label={"Quem vai poder ver meu Deck?"} />
            </View>
            <View className="w-full px-4 mt-4">
              <PickerSelectComponent items={typeItems} setValue={setTypeOptions} placeholder={typePlaceholder} label={"Meu Deck vai ser sobre..."} />
            </View>
            <FormikButton title={route.params ? "Salvar" : "Criar Deck"} EnableGlow={true} />
          </View>
        </FormLayout>
      </FormikForm>
    </FormBackgroundLayout>
  )
}

export default Create