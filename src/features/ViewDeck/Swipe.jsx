import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-deck-swiper";
import LinearGradient from "react-native-linear-gradient";
import FlipCard from "react-native-flip-card";
import { DARK_BLUE, PINK, PURPLE } from "../../constants/colors/gradientColors";
import { FeedbackEasy, FeedbackHard } from "../../assets/images/svgs";
import ProgressBar from "react-native-progress/Bar";
import { updateCard } from "../../services/firestore";
import { spacedRepetition } from "../../utils/spacedRepetition";

const Swipe = ({ route, navigation }) => {
  const { name, id, uid, createdBy, createdAt, cards } = route.params ?? {};
  const [swipedCards, setSwipedCards] = useState(0);
  const [swipedAll, setSwipedAll] = useState(false);
  const [cardsToUpdate, setCardsToUpdate] = useState([]);

  function batchUpdateCards() {
    if (cardsToUpdate.length === 0) {
      return;
    }

    cardsToUpdate.forEach(async (card) => {
      console.log(card);
      await updateCard(
        card.content.question,
        card.content.answer,
        card.type,
        card.id,
        id,
        card.cardIndex,
        card.uid,
        card.createdAt,
        card.lastReviewed,
        card.nextReview,
        card.difficulty
      );
    });
  }

  useEffect(() => {
    // Call batchUpdateCards when swipedAll is true
    if (swipedAll) {
      batchUpdateCards();
    }
  }, [swipedAll]);

  // console.log(cardsToUpdate);

  return (
    <>
      <View className="z-20 mx-auto h-4 w-4/5">
        <ProgressBar
          progress={swipedCards / cards.length}
          borderRadius={100}
          width={null}
          height={15}
          borderWidth={0}
          color={"#BFD24F"}
          unfilledColor={"rgb(156 163 175)"}
        />
      </View>
      <Swiper
        backgroundColor="#292929"
        // animateCardOpacity={true}
        animateOverlayLabelsOpacity={true}
        verticalSwipe={false}
        cardIndex={0}
        stackSize={cards.length < 5 ? cards.length : 5}
        cards={cards}
        onSwiped={(cardIndex) => {
          setSwipedCards(cardIndex + 1);
        }}
        onSwipedAll={() => {
          setSwipedAll(true);
        }}
        onSwipedRight={(cardIndex) => {
          // Define a dificuldade da carta como "fácil"
          const updatedCards = [...cards];
          updatedCards[cardIndex].difficulty = "easy";
          updatedCards[cardIndex].lastReviewed = Date.now();
          updatedCards[cardIndex].nextReview = spacedRepetition("easy");

          const cardToUpdate = updatedCards[cardIndex];
          // Atualize a lista de cartas no estado
          setCardsToUpdate((prevState) => {
            // Clone the existing array and append the new card object
            const updatedCardsArray = [
              ...prevState,
              { ...cardToUpdate, cardIndex: cardIndex },
            ];
            return updatedCardsArray;
          });

          // console.log(updatedCards[cardIndex]);
        }}
        onSwipedLeft={(cardIndex) => {
          // Define a dificuldade da carta como "difícil"
          const updatedCards = [...cards];
          updatedCards[cardIndex].difficulty = "hard";
          updatedCards[cardIndex].lastReviewed = Date.now();
          updatedCards[cardIndex].nextReview = spacedRepetition("hard");
          // Atualize a lista de cartas no estado
          const cardToUpdate = updatedCards[cardIndex];
          // Atualize a lista de cartas no estado
          setCardsToUpdate((prevState) => {
            // Clone the existing array and append the new card object
            const updatedCardsArray = [
              ...prevState,
              { ...cardToUpdate, cardIndex: cardIndex },
            ];
            return updatedCardsArray;
          });
        }}
        renderCard={(card) => {
          return (
            <FlipCard
              friction={40}
              perspective={1000}
              flipHorizontal={true}
              flipVertical={false}
              clickable={card.type == "QA" ? true : false}
              className="content-center items-center justify-center self-center"
            >
              {/* Front Face */}
              <View className="relative mx-auto my-1 h-[330px] w-[255px]">
                <LinearGradient
                  colors={[DARK_BLUE, PURPLE, PINK]}
                  className="h-full w-full rounded-3xl border-[3px]"
                  style={{ borderColor: "#292929" }}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0.85, y: 0.85 }}
                />
                <View className="absolute h-full w-full items-center justify-between p-4">
                  <Text
                    style={{
                      fontSize: card.content.question.length <= 20 ? 40 : 15,
                    }}
                    className="m-auto break-words text-center font-bold text-white"
                  >
                    {card.content.question}
                  </Text>
                </View>
              </View>
              {/* Back Face */}
              <View className="relative mx-auto my-1 h-[330px] w-[255px]">
                <LinearGradient
                  colors={[DARK_BLUE, PURPLE, PINK]}
                  className="h-full w-full rounded-3xl border-[3px]"
                  style={{ borderColor: "#292929" }}
                  start={{ x: 0.85, y: 0 }}
                  end={{ x: 0, y: 0.85 }}
                />
                <View className="absolute h-full w-full items-center justify-between p-4">
                  <Text
                    style={{
                      fontSize: card.content.answer.length <= 20 ? 40 : 15,
                    }}
                    className="m-auto break-words text-center font-bold text-white"
                  >
                    {card.content.answer}
                  </Text>
                </View>
              </View>
            </FlipCard>
          );
        }}
        overlayLabelStyle={{
          fontSize: 45,
          fontWeight: "bold",
          borderRadius: 10,
          padding: 10,
          overflow: "hidden",
        }}
        overlayLabelWrapperStyle={{
          position: "absolute",
          backgroundColor: "transparent",
          zIndex: 2,
          flex: 1,
          width: "100%",
          height: "100%",
        }}
        overlayLabels={{
          left: {
            element: (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <FeedbackHard />
                <Text className="font-bold">DIFÍCIL</Text>
              </View>
            ) /* Optional */,
            title: "NOPE",
            style: {
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                marginTop: 0,
                marginLeft: "-7%",
              },
            },
          },
          right: {
            element: (
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <FeedbackEasy />
                <Text className="font-bold">FÁCIL</Text>
              </View>
            ) /* Optional */,
            title: "LIKE",
            style: {
              wrapper: {
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginTop: 0,
                marginLeft: "7%",
              },
            },
          },
        }}
      />
    </>
  );
};

export default Swipe;
