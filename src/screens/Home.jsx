import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import useHeaderRight from "../hooks/useHeaderRight";
import { DeckComponent, SearchInput } from "../components";
import { DARK_GRAY } from "../constants/colors/layoutColors";
import { PURPLE } from "../constants/colors/gradientColors";
import Swiper from "react-native-deck-swiper";
import { Chevron } from "react-native-shapes";
import { handleSearch } from "../utils/handleSearch";

const Home = ({ navigation }) => {
  const [userDecks, setUserDecks] = useState([{}]);
  const [userRevisions, setUserRevisions] = useState([]);
  const [render, setRender] = useState([]);
  const [loading, setLoading] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [filteredDecks, setFilteredDecks] = useState();

  useHeaderRight(navigation, DARK_GRAY);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("decks")
      .where("uid", "==", auth().currentUser.uid)
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        setLoading(true);
        const decks = [];
        querySnapshot.forEach((doc) => {
          decks.push(doc.data());
        });
        const aux = [];
        decks.forEach((deck) => {
          deck.cards.forEach((card) => {
            const currentDate = new Date().toLocaleDateString("pt-BR");
            const nextReviewDate = new Date(card.nextReview).toLocaleDateString(
              "pt-BR"
            );
            if (currentDate === nextReviewDate) {
              aux.push(deck);
            }
          });
        });
        setUserRevisions(aux);
        setUserDecks(decks);
        setFilteredDecks(decks);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setRender(
      filteredDecks?.map((deck) => (
        <DeckComponent
          key={deck.id}
          title={deck.name}
          navigate={navigation.navigate}
          params={deck}
          screen={"Ver Deck"}
          isMarked={userRevisions?.some((rev) => rev?.id === deck.id)}
        />
      ))
    );
  }, [userRevisions, userDecks, filteredDecks]);

  return (
    <SafeAreaView className="flex-1 bg-white pb-[90px]">
      <ScrollView>
        <View className="px-6">
          <SearchInput
            placeholder={"Pesquisar..."}
            onChange={(e) =>
              handleSearch(e, setInputValue, setFilteredDecks, userDecks)
            }
            value={inputValue}
          />
        </View>

        {loading ? (
          <ActivityIndicator size={50} color={PURPLE} />
        ) : render?.length === 0 ? (
          <>
            <Text className="p-6 text-center text-lg font-bold text-black">
              Parece que não tem nenhum Deck aqui...
            </Text>
            <DeckComponent
              title={"Comece criando um novo Deck!"}
              navigate={navigation.navigate}
              screen={"Criar"}
              params={null}
            />
          </>
        ) : (
          <>
            {userRevisions.length > 0 && (
              <View className="h-[130px] w-[100%] overflow-hidden px-6">
                <Swiper
                  backgroundColor="#ffffff00"
                  animateCardOpacity={true}
                  verticalSwipe={false}
                  cardIndex={0}
                  stackSize={
                    userRevisions?.length <= 3 ? userRevisions?.length : 3
                  }
                  cards={userRevisions}
                  cardVerticalMargin={0}
                  cardHorizontalMargin={0}
                  infinite={true}
                  containerStyle={{
                    position: "relative",
                    flex: 1,
                  }}
                  cardStyle={{
                    width: "100%",
                  }}
                  renderCard={(card) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate("Ver Deck", card);
                        }}
                        activeOpacity={0.95}
                        className="h-[85px] w-full flex-row items-center justify-between rounded-2xl border-[2px] border-white bg-[#292929]"
                      >
                        <View className="m-4">
                          <Text className="text-lg font-bold text-white">
                            {card?.name}
                          </Text>
                          <Text className="text-xs text-white">
                            Você tem uma revisão marcada para hoje!
                          </Text>
                        </View>
                        <View className="m-4 h-[30px] w-[30px] justify-center rounded-md bg-white">
                          <Chevron
                            size={2}
                            rotate={-90}
                            color="#292929"
                            style={{ top: 5, left: 2 }}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            )}
            <View className="flex-row flex-wrap px-6">{render}</View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
