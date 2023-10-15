import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Calendar } from "react-native-calendars";
import { FormBackgroundLayout, FormLayout } from "../../layouts/forms";
import useHeaderRight from "../../hooks/useHeaderRight";
import {
  ButtonDialogueComponent,
  ButtonNavComponent,
  DeckComponent,
} from "../../components";
import { WHITE } from "../../constants/colors/layoutColors";
import firestore from "@react-native-firebase/firestore";
import { PURPLE } from "../../constants/colors/gradientColors";
import { deleteDeck } from "../../services/firestore";

const ViewDeck = ({ route, navigation }) => {
  useHeaderRight(navigation, "#FFF");
  const { name, id, uid, createdBy, createdAt, visibility, type } =
    route.params;
  const [selected, setSelected] = useState("");
  const [deckData, setDeckData] = useState([{}]);
  const [cards, setCards] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const [markedDates, setMarkedDates] = useState({});

  const today = new Date();
  const date = new Date(createdAt);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formatDate = `${yyyy}-${mm}-${dd}`;

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("decks")
      .doc(id)
      .onSnapshot((querySnapshot) => {
        setLoading(true);
        const data = querySnapshot.data();
        if (data) {
          setDeckData(querySnapshot.data());
          setCards(querySnapshot.data().cards);
          // console.log(querySnapshot.data().cards);
          getCalendar(querySnapshot.data());
        }
        setLoading(false);
      });
    return () => unsubscribe();
  }, []);

  const getCalendar = (deckData) => {
    // Format and mark the dates
    const formattedDates = {};
    deckData?.cards?.map((card) => {
      const nextReviewDate = new Date(card.nextReview);
      const nextReviewYear = new Date(card.nextReview).getFullYear().toString();
      const nextReviewMonth = (
        new Date(card.nextReview).getMonth() + 1
      ).toString();
      const nextReviewDay = new Date(card.nextReview).getDate().toString();
      const date = `${nextReviewYear}-${nextReviewMonth}-${nextReviewDay}`;

      const formattedDate = formatDateWithLeadingZeros(date); // Format the date as needed
      formattedDates[formattedDate] =
        nextReviewDate.toLocaleDateString() === today.toLocaleDateString()
          ? {
              selected: true,
              selectedColor: "#ff00ed",
            }
          : {
              selected: true,
              selectedColor: "#292929",
            };
    });

    setMarkedDates(formattedDates);
  };

  // Function to format dates with leading zeros
  function formatDateWithLeadingZeros(date) {
    const parts = date.split("-");
    const year = parts[0];
    const month = parts[1].length === 1 ? `0${parts[1]}` : parts[1];
    const day = parts[2].length === 1 ? `0${parts[2]}` : parts[2];
    return `${year}-${month}-${day}`;
  }

  // console.log(JSON.stringify(markedDates, null, 2));

  return (
    <FormBackgroundLayout>
      {loading ? (
        <ActivityIndicator size={50} color={"#FFF"} className="p-16" />
      ) : (
        <>
          <View className="flex flex-row justify-between px-6 py-2">
            <Text className="text-base font-bold text-white">
              Por: {createdBy}
            </Text>
            <Text className="text-base font-bold text-white">
              Criado em: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
            </Text>
          </View>
          <View className="flex w-full flex-row items-center justify-center px-5 pb-10 pt-5">
            <DeckComponent
              viewOnly={true}
              title={deckData.name}
              borderColor="#292929"
            />
            <View className="grow px-5">
              <ButtonNavComponent
                title={"Cartas"}
                navigation={navigation}
                screen={"Editar Cartas"}
                params={{ id, uid }}
                fullWidth={true}
              />
              <ButtonNavComponent
                title={"Editar Deck"}
                navigation={navigation}
                screen={"Editar Deck"}
                params={{ name, visibility, type, id }}
                fullWidth={true}
              />
              <ButtonDialogueComponent
                title={"Excluir Deck"}
                dialogText={"Deseja apagar este deck?"}
                navigateFn={() => navigation.navigate("Home")}
                useRemove={true}
                removeFn={() => deleteDeck(id, uid)}
                time={300}
                fullWidth={true}
              />
            </View>
          </View>
        </>
      )}
      <FormLayout grow={1} height={0.55}>
        {loading ? (
          <ActivityIndicator size={50} color={PURPLE} className="p-16" />
        ) : (
          <>
            {markedDates && (
              <Calendar
                style={{
                  marginBottom: 30,
                }}
                current={formatDate}
                onDayPress={(day) => {
                  setSelected(day.dateString);
                }}
                hideArrows={true}
                markedDates={markedDates}
              />
            )}

            <View className="mb-40 items-center justify-center">
              <ButtonNavComponent
                title={cards.length === 0 ? "Adicione Cartas" : "Revisar"}
                EnableGlow={true}
                navigation={navigation}
                screen={cards.length === 0 ? "Editar Cartas" : "Swipe"}
                params={{ name, id, uid, createdBy, createdAt, cards }}
              />
            </View>
          </>
        )}
      </FormLayout>
    </FormBackgroundLayout>
  );
};

export default ViewDeck;
