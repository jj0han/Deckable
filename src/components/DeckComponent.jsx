import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import CardGradientComponent from './CardGradientComponent';
import {WHITE} from '../constants/colors/layoutColors';

const DeckComponent = ({
  title,
  navigate,
  params = {},
  viewOnly = false,
  screen,
  borderColor = WHITE,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        !viewOnly && navigate(screen, params);
      }}
      className="relative w-[155px] h-[200px] mx-auto my-1">
      <View className="absolute left-0 top-0">
        <CardGradientComponent borderColor={borderColor} />
      </View>
      <View className="absolute top-[10px] right-[10px]">
        <CardGradientComponent borderColor={borderColor} />
      </View>
      <View className="absolute right-0 bottom-0">
        <CardGradientComponent borderColor={borderColor} />
        <View className="absolute h-full w-full p-4 justify-center items-center">
          <Text className="text-white text-xl font-bold text-center break-words">
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeckComponent;
