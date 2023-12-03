import { View, Text, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import useHeaderRight from "../../hooks/useHeaderRight";
import { FormBackgroundLayout, FormLayout } from "../../layouts";
import {
  ButtonComponent,
  ButtonNavComponent,
  ConfirmDialog,
  DeckComponent,
} from "../../components";
import { useIsFocused } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { PURPLE } from "../../constants/colors/gradientColors";
import { importDeck } from "../../services/firestore";
import uuid from "react-native-uuid";
import auth from "@react-native-firebase/auth";

const ViewOtherUserDeck = ({ route, navigation }) => {
  useHeaderRight(navigation, "#FFF");
  const { name, id, uid, createdBy, createdAt, visibility, type } =
    route.params;
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [selected, setSelected] = useState("");
  const [deckData, setDeckData] = useState([{}]);
  const [cards, setCards] = useState([{}]);
  const [modalVisible, setModalVisible] = useState(false);

  const date = new Date(createdAt);

  function LogoTitle() {
    return (
      <View>
        <Text className={"text-center text-lg font-bold text-white"}>
          {name} de {createdBy}
        </Text>
        <Text className={"text-center text-xs font-medium text-white"}>
          criado em {date.toLocaleDateString("pt-BR")}
        </Text>
      </View>
    );
  }

  useEffect(() => {
    navigation.setOptions({ headerTitle: (props) => <LogoTitle {...props} /> });
  }, []);

  useEffect(() => {
    if (isFocused) {
      setLoading(true);
      firestore()
        .collection("decks")
        .doc(id)
        .get()
        .then((data) => {
          setDeckData(data.data());
          setCards(data.data().cards);
          // console.log(cards)
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isFocused]);

  const handleConfirm = () => {
    setModalVisible(false);
  };

  const handlePress = () => {
    const generatedID = uuid.v4();
    importDeck(name, generatedID, visibility, type, createdBy, cards);
    setModalVisible(true);
  };

  return (
    <>
      <ConfirmDialog
        title={"Deck foi importado para a sua conta"}
        visible={modalVisible}
        onlyConfirm
        action={handleConfirm}
        labels={["OK", "OK"]}
      />
      <FormBackgroundLayout>
        {loading ? (
          <ActivityIndicator size={50} color={"#FFF"} className="p-16" />
        ) : (
          <View className="flex w-full flex-row px-5 pb-10 pt-5">
            <DeckComponent
              viewOnly={true}
              title={deckData.name}
              borderColor="#292929"
            />
          </View>
        )}
        <FormLayout grow={1}>
          {loading ? (
            <ActivityIndicator size={50} color={PURPLE} className="p-16" />
          ) : uid === auth().currentUser.uid ? null : (
            <>
              <View className="items-center justify-center">
                <ButtonNavComponent
                  title={"Ver Cartas"}
                  EnableGlow
                  navigation={navigation}
                  screen={"Editar Cartas"}
                  params={{ name, id, uid }}
                />
                <ButtonComponent
                  title={"Importar Deck"}
                  EnableGlow
                  handlePress={handlePress}
                />
              </View>
            </>
          )}
        </FormLayout>
      </FormBackgroundLayout>
    </>
  );
};

export default ViewOtherUserDeck;
