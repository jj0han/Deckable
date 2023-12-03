import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import Swiper from "react-native-deck-swiper";
import LinearGradient from "react-native-linear-gradient";
import FlipCard from "react-native-flip-card";
import { DARK_BLUE, PINK, PURPLE } from "../../constants/colors/gradientColors";
import { FeedbackEasy, FeedbackHard } from "../../assets/images/svgs";
import ProgressBar from "react-native-progress/Bar";
import { updateCardsGroup } from "../../services/firestore";
import { spacedRepetition } from "../../utils/spacedRepetition";
import { LoadingDialog } from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";
import { TEXT_WHITE } from "../../constants/colors/textColors";

const Swipe = ({ route, navigation }) => {
  const { name, id, cards } = route.params ?? {};
  let updatedCards = JSON.parse(JSON.stringify(cards));
  const [swipedCards, setSwipedCards] = useState(0);
  const [swipedAll, setSwipedAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cardsToUpdate, setCardsToUpdate] = useState([]);

  function cardStreak(updatedCards, prevDifficulty) {
    console.log(
      `actual diff: ${updatedCards.difficulty} prev diff:${prevDifficulty}`
    );
    if (
      updatedCards.difficulty === prevDifficulty &&
      !isNaN(updatedCards.difficultyStreak)
    ) {
      updatedCards.difficultyStreak += 1;
    } else {
      updatedCards.difficultyStreak = 0;
    }
  }

  const mergeUpdatedCards = (originalCards, updatedCards) => {
    return originalCards.map((originalCard, index) => {
      // If the card is updated, use the updated version, otherwise use the original
      return updatedCards[index] ? updatedCards[index] : originalCard;
    });
  };

  // Function to handle batch card updates
  const batchUpdateCards = async (cardsToUpdate) => {
    setShowModal(true);
    try {
      // Merge updated cards into the original cards array
      const mergedCards = mergeUpdatedCards(cards, cardsToUpdate);

      // Perform your updateCardsGroup operation with the merged cards
      await updateCardsGroup(id, mergedCards);

      // Optionally, you can set the merged cards back to state if needed
      // setCards(mergedCards);
    } catch (error) {
      console.error("Error updating cards:", error);
    }
  };

  function LogoTitle() {
    return (
      <SafeAreaView
        className={"m-0 w-full flex-row items-center justify-center gap-5 p-2"}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name={"arrowleft"} size={24} color={TEXT_WHITE} />
        </TouchableOpacity>
        <View className={"w-[80%]"}>
          <Text className={"text-lg font-bold text-white"}>{name}</Text>
          <View className="z-20 h-4">
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
        </View>
      </SafeAreaView>
    );
  }

  useEffect(() => {
    navigation.setOptions({ header: (props) => <LogoTitle {...props} /> });
  }, [swipedCards]);

  useEffect(() => {
    if (swipedAll) {
      setTimeout(() => {
        batchUpdateCards(cardsToUpdate).finally(() => {
          setTimeout(() => {
            setShowModal(false);
            console.log("complete save");
            navigation.goBack();
          }, 3000);
        });
      }, 1500);
    }
  }, [swipedAll, cardsToUpdate]);

  useEffect(() => {
    if (!swipedAll && cardsToUpdate.length > 0) {
      const unsubscribe = navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
        setTimeout(() => {
          batchUpdateCards(cardsToUpdate).finally(() => {
            setTimeout(() => {
              setShowModal(false);
              console.log("saved in between");
              navigation.dispatch(e.data.action);
            }, 3000);
          });
        }, 1500);
      });
      return () => {
        unsubscribe();
      };
    }
  }, [navigation, swipedAll, cardsToUpdate]);

  return (
    <View className={"bg-[#292929]"}>
      <LoadingDialog title={`Atualizando Progresso`} visible={showModal} />
      <View className="h-full w-[100%] overflow-hidden px-6">
        <Swiper
          backgroundColor="#292929"
          animateOverlayLabelsOpacity={true}
          verticalSwipe={false}
          cardIndex={0}
          stackSize={cards.length < 5 ? cards.length : 5}
          cards={cards}
          containerStyle={{
            position: "relative",
            flex: 1,
          }}
          cardStyle={{
            width: "100%",
            left: 0,
            top: "15%",
          }}
          onSwiped={(cardIndex) => {
            setSwipedCards(cardIndex + 1);
          }}
          onSwipedAll={() => {
            setSwipedAll(true);
          }}
          onSwipedRight={(cardIndex) => {
            // Define a dificuldade da carta como "fácil"
            updatedCards[cardIndex].difficulty = "easy";
            updatedCards[cardIndex].lastReviewed = Date.now();
            cardStreak(updatedCards[cardIndex], cards[cardIndex].difficulty);
            updatedCards[cardIndex].nextReview = spacedRepetition(
              "easy",
              cards[cardIndex],
              updatedCards[cardIndex].difficultyStreak
            );

            setCardsToUpdate((prevState) => {
              const updatedState = [...prevState];
              updatedState[cardIndex] = {
                ...updatedState[cardIndex],
                ...updatedCards[cardIndex],
              };
              return updatedState;
            });
          }}
          onSwipedLeft={(cardIndex) => {
            // Define a dificuldade da carta como "difícil"
            updatedCards[cardIndex].difficulty = "hard";
            updatedCards[cardIndex].lastReviewed = Date.now();
            cardStreak(updatedCards[cardIndex], cards[cardIndex].difficulty);
            updatedCards[cardIndex].nextReview = spacedRepetition(
              "hard",
              cards[cardIndex],
              updatedCards[cardIndex].difficultyStreak
            );

            setCardsToUpdate((prevState) => {
              const updatedState = [...prevState];
              updatedState[cardIndex] = {
                ...updatedState[cardIndex],
                ...updatedCards[cardIndex],
              };
              return updatedState;
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
                <View className="relative h-4/6 w-11/12 flex-row items-center justify-between">
                  <Text
                    className={
                      "absolute bottom-5 left-5 z-50 font-semibold text-gray-200 opacity-60"
                    }
                  >
                    {card.type === "QA" ? "Pergunta & Resposta" : "Básico"}
                  </Text>
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
                <View className="relative h-4/6 w-11/12 flex-row items-center justify-between">
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
      </View>
    </View>
  );
};

export default Swipe;
