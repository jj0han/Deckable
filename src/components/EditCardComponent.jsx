import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  DARK_BLUE,
  PINK,
  PURPLE,
  WHITE,
} from '../constants/colors/gradientColors';

const EditCardComponent = ({
  title,
  cardID,
  deckID,
  content,
  card,
  index,
  createdAt,
  borderColor = '',
  navigation,
}) => {
  const date = new Date(createdAt);
  const handlePress = () => {
    navigation.navigate('Editar Carta', {
      deckID: deckID,
      content: content,
      cardID: cardID,
      uid: card.uid,
      index: index,
      type: card.type,
      createdAt: card.createdAt,
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      onLongPress={() => {
        console.log('long press');
      }}
      className="relative w-[155px] h-[200px] mx-auto my-1">
      <LinearGradient
        colors={[DARK_BLUE, PURPLE, PINK]}
        className="w-full h-full rounded-3xl border-[3px]"
        style={{
          borderColor: borderColor ? borderColor : WHITE,
        }}
        start={{x: 0, y: 0}}
        end={{x: 0.85, y: 0.85}}
      />
      <View className="absolute w-full h-full p-4 justify-between items-center">
        <Text
          style={{fontSize: title.length <= 10 ? 30 : 16}}
          className="text-white font-bold text-center break-words">
          {title.length > 60 ? `${title.slice(0, 60)}...` : title}
        </Text>
        <Text className="text-white text-base font-bold text-center break-words">
          {date.toLocaleDateString('pt-BR')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EditCardComponent;
