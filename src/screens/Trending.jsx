import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import useHeaderRight from "../hooks/useHeaderRight";
import { DeckComponent, SearchInput } from "../components";
import { PURPLE } from "../constants/colors/gradientColors";
import { handleSearch } from "../utils/handleSearch";

const Trending = ({ navigation }) => {
  useHeaderRight(navigation, "#292929");
  const [userDecks, setUserDecks] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [filteredDecks, setFilteredDecks] = useState();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection("decks")
      .where("visibility", "==", "public")
      .orderBy("createdAt")
      .onSnapshot((querySnapshot) => {
        setLoading(true);
        const decks = [];
        querySnapshot.forEach((doc) => {
          decks.push(doc.data());
        });
        setUserDecks(decks);
        console.log(JSON.stringify(decks, null, 2));
        setFilteredDecks(decks);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const render = filteredDecks?.map((deck) => (
    <DeckComponent
      key={deck.id}
      title={deck.name}
      navigate={navigation.navigate}
      params={deck}
      screen={"Ver Deck de Usuário"}
    />
  ));

  return (
    <SafeAreaView className="flex-1 bg-white px-6 pb-[90px]">
      <ScrollView>
        <SearchInput
          placeholder={"Pesquisar..."}
          onChange={(e) =>
            handleSearch(e, setInputValue, setFilteredDecks, userDecks)
          }
          value={inputValue}
        />
        {loading ? (
          <ActivityIndicator size={50} color={PURPLE} />
        ) : (
          <View className="flex-row flex-wrap">{render}</View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trending;
