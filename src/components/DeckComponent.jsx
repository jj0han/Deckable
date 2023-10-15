import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CardGradientComponent from "./CardGradientComponent";
import { WHITE } from "../constants/colors/layoutColors";

const DeckComponent = ({
  title,
  navigate,
  params = {},
  viewOnly = false,
  isMarked = false,
  screen,
  borderColor = WHITE,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        !viewOnly && navigate(screen, params);
      }}
      className="relative mx-auto my-1 h-[200px] w-[155px]"
    >
      <View className="absolute left-0 top-0">
        <CardGradientComponent borderColor={borderColor} />
      </View>
      <View className="absolute right-[10px] top-[10px]">
        <CardGradientComponent borderColor={borderColor} />
      </View>
      <View className="absolute bottom-0 right-0">
        <CardGradientComponent borderColor={borderColor} />
        {isMarked && (
          <View className="absolute left-4 top-4 h-2 w-2 rounded-full bg-red-500" />
        )}
        <View className="absolute h-full w-full items-center justify-center p-4">
          <Text className="break-words text-center text-xl font-bold text-white">
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeckComponent;
