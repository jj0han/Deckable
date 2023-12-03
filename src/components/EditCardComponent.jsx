import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {
  DARK_BLUE,
  PINK,
  PURPLE,
  WHITE,
} from "../constants/colors/gradientColors";

const EditCardComponent = ({
  title,
  cardID,
  deckID,
  content,
  card,
  index,
  createdAt,
  borderColor = "",
  navigation,
  viewOnly = false,
}) => {
  const date = new Date(createdAt);
  const nextReview = new Date(card.nextReview);
  const lastReviewed = new Date(card.nextReview);

  const handlePress = () => {
    !viewOnly &&
      navigation.navigate("Editar Carta", {
        card: card,
        deckID: deckID,
        content: content,
        cardID: cardID,
        uid: card.uid,
        index: index,
      });
  };

  return (
    <TouchableOpacity
      key={cardID}
      onPress={handlePress}
      onLongPress={() => {
        console.log("long press");
      }}
      className="relative mx-auto my-1 h-[200px] w-[155px]"
    >
      <LinearGradient
        colors={[DARK_BLUE, PURPLE, PINK]}
        className="h-full w-full rounded-3xl border-[3px]"
        style={{
          borderColor: borderColor ? borderColor : WHITE,
        }}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.85, y: 0.85 }}
      />
      <View className="absolute h-full w-full items-center justify-between p-4">
        <Text
          style={{ fontSize: title.length <= 10 ? 30 : 16 }}
          className="break-words text-center font-bold text-white"
        >
          {title.length > 60 ? `${title.slice(0, 60)}...` : title}
        </Text>
        <Text className="break-words text-center text-xs font-bold text-white">
          data de revisão {nextReview.toLocaleDateString("pt-BR")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EditCardComponent;
