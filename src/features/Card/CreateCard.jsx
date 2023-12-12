import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { TabActions } from "@react-navigation/native";
import { FormBackgroundLayout, FormLayout } from "../../layouts";
import {
  ButtonDialogueComponent,
  CardGradientSwipe,
  ConfirmDialog,
  FormikButton,
  FormikForm,
  FormikFormField,
  PickerSelectComponent,
} from "../../components";
import { Field } from "formik";
import { createCard, deleteCard, updateCard } from "../../services/firestore";
import {
  basicCardSchema,
  qaCardSchema,
} from "../../constants/schemas/yupSchemas";
import { getCardType } from "../../utils/getCardType";

const CreateCard = ({ route, navigation }) => {
  const { card, cardID, deckID, content, uid, index } = route.params ?? {};
  const [isFlipped, setIsFlipped] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const cardTypes = [
    { label: "Básico", value: "BSC" },
    { label: "Pergunta e Resposta", value: "QA" },
  ];

  const { updatedCardTypePlaceholder, updatedCardType } =
    getCardType(card?.type, cardTypes) ?? {};

  const [cardType, setType] = useState(updatedCardTypePlaceholder[0].value);

  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  // redefinindo a rota para Home
  useEffect(() => {
    navigation.dispatch(TabActions.jumpTo("Home"));
  }, []);

  return (
    <>
      <ConfirmDialog
        title={`Carta foi ${
          content ? "atualizada" : "adicionada"
        } com sucesso!`}
        visible={modalVisible}
        onlyConfirm
        action={handleConfirm}
        labels={["OK", "OK"]}
      />
      <FormBackgroundLayout>
        <FormikForm
          initialValues={{
            question: content ? content.question : "",
            answer: content ? content.answer : "",
          }}
          validationSchema={cardType == "QA" ? qaCardSchema : basicCardSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            if (content) {
              updateCard(cardID, deckID, index, values, cardType, card);
              handlePress();
            } else {
              createCard(values, cardType, deckID).then(() => {
                resetForm();
              });
              handlePress();
            }
          }}
        >
          <View className="w-full flex-row justify-center p-5">
            <View className="grow">
              <CardGradientSwipe isFlipped={isFlipped} />
            </View>
            <View className="grow-[100] p-3">
              <View>
                <PickerSelectComponent
                  items={updatedCardType[0]}
                  setValue={setType}
                  placeholder={updatedCardTypePlaceholder[0]}
                  label={"Tipo do Card"}
                  white={true}
                />
              </View>
              <View>
                {content && (
                  <ButtonDialogueComponent
                    time={300}
                    navigateFn={() => navigation.goBack()}
                    useRemove={true}
                    removeFn={() => deleteCard(deckID, index)}
                    uid={uid}
                    fullWidth={true}
                    title={"Excluir Carta"}
                    dialogText={"Deseja apagar esta carta?"}
                  />
                )}
              </View>
            </View>
          </View>
          <FormLayout>
            <Field
              component={FormikFormField}
              name={"question"}
              placeholder={"Digite sua pergunta"}
              onFocus={() => setIsFlipped(false)}
              multiline={true}
            />
            {cardType == "QA" && (
              <Field
                component={FormikFormField}
                name={"answer"}
                placeholder={"Digite sua resposta"}
                onFocus={() => setIsFlipped(true)}
                multiline={true}
              />
            )}
            <FormikButton
              title={content ? "Salvar carta" : "Adicionar carta"}
              EnableGlow={true}
            />
          </FormLayout>
        </FormikForm>
      </FormBackgroundLayout>
    </>
  );
};

export default CreateCard;
