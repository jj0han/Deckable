import React, { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { Field } from "formik";
import uuid from "react-native-uuid";
import useHeaderRight from "../hooks/useHeaderRight";
import { FormBackgroundLayout, FormLayout } from "../layouts";
import {
  ConfirmDialog,
  DeckFormikComponent,
  FormikButton,
  FormikForm,
  FormikFormField,
  PickerSelectComponent,
} from "../components";
import { WHITE } from "../constants/colors/layoutColors";
import { createDeck, updateDeck } from "../services/firestore";
import { createDeckSchema } from "../constants/schemas/yupSchemas";
import { getDeckType } from "../utils/getDeckType";
import { getDeckVisibility } from "../utils/getDeckVisibility";

const Create = ({ navigation, route }) => {
  const { name, visibility, type, id } = route.params ?? {};
  const [modalVisible, setModalVisible] = useState(false);

  const deckTypes = [
    { label: "Genérico", value: "gn" },
    { label: "Ciências Exatas", value: "ec" },
    { label: "Ciências da Natureza", value: "nc" },
    { label: "Linguagens", value: "lg" },
    { label: "Ciências Humanas", value: "hc" },
  ];

  const deckVisibility = [
    { label: "Todos", value: "public" },
    { label: "Somente eu", value: "private" },
  ];

  const { updatedDeckPlaceholder, updatedDeckTypes } = getDeckType(
    type,
    deckTypes
  );
  const { updatedDeckVisibilityPlaceholder, updatedDeckVisibility } =
    getDeckVisibility(visibility, deckVisibility);

  const [visibilityOptions, setVisibilityOptions] = useState(
    updatedDeckVisibilityPlaceholder[0].value
  );
  const [typeOptions, setTypeOptions] = useState(
    updatedDeckPlaceholder[0].value
  );

  useHeaderRight(navigation, "#FFF");

  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <ConfirmDialog
        title={"Deck salvo com sucesso!"}
        visible={modalVisible}
        onlyConfirm
        action={handleConfirm}
        labels={["OK", "OK"]}
      />
      <FormBackgroundLayout>
        <FormikForm
          initialValues={{
            name: name ? name : "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(visibilityOptions, typeOptions);
            if (route.params) {
              updateDeck(
                values.name.trim(),
                id,
                visibilityOptions,
                typeOptions
              );
              handlePress();
            } else {
              const generatedID = uuid.v4();
              createDeck(
                values.name.trim(),
                generatedID,
                visibilityOptions,
                typeOptions
              );
              navigation.navigate("Criar Carta", {
                deckID: generatedID,
              });
              resetForm();
            }
          }}
          validationSchema={createDeckSchema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          <View className="h-2/5 items-center justify-center py-5">
            <DeckFormikComponent
              placeholder={"Digite um nome"}
              borderColor="#292929"
            />
          </View>
          <FormLayout height={0.6}>
            <View className="mb-5 w-full">
              <Field
                component={FormikFormField}
                name={"name"}
                placeholder={"Digite um nome"}
              />
              <View className="mt-4 w-full px-4">
                <PickerSelectComponent
                  items={updatedDeckVisibility[0]}
                  setValue={setVisibilityOptions}
                  placeholder={
                    updatedDeckVisibilityPlaceholder.length >= 1
                      ? updatedDeckVisibilityPlaceholder[0]
                      : updatedDeckVisibilityPlaceholder
                  }
                  label={"Quem vai poder ver meu Deck?"}
                />
              </View>
              <View className="mt-4 w-full px-4">
                <PickerSelectComponent
                  items={updatedDeckTypes[0]}
                  setValue={setTypeOptions}
                  placeholder={
                    updatedDeckPlaceholder.length >= 1
                      ? updatedDeckPlaceholder[0]
                      : updatedDeckPlaceholder
                  }
                  label={"Meu Deck vai ser sobre..."}
                />
              </View>
              <FormikButton
                title={route.params ? "Salvar" : "Criar Deck"}
                EnableGlow={true}
              />
            </View>
          </FormLayout>
        </FormikForm>
      </FormBackgroundLayout>
    </>
  );
};

export default Create;
