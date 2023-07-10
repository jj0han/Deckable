import {View, Text} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import FlipCard from 'react-native-flip-card';
import {DARK_BLUE, PINK, PURPLE} from '../constants/colors/gradientColors';
import {useFormikContext} from 'formik';

const CardGradientSwipe = ({isFlipped = false}) => {
  const {values} = useFormikContext();

  return (
    <FlipCard
      friction={40}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      clickable={false}
      flip={isFlipped}
      className="justify-center items-center self-center content-center">
      {/* Front Face */}
      <View className="relative w-[136px] h-[180px] mx-auto my-1">
        <LinearGradient
          colors={[DARK_BLUE, PURPLE, PINK]}
          className="w-full h-full rounded-3xl border-[3px]"
          style={{borderColor: '#292929'}}
          start={{x: 0, y: 0}}
          end={{x: 0.85, y: 0.85}}
        />
        <View className="absolute w-full h-full p-4 justify-between items-center">
          <Text className="text-white font-bold text-base text-center break-words m-auto">
            {values.question.trim() ? values.question.trim() : ''}
          </Text>
        </View>
      </View>
      {/* Back Face */}
      <View className="relative w-[136px] h-[180px] mx-auto my-1">
        <LinearGradient
          colors={[DARK_BLUE, PURPLE, PINK]}
          className="w-full h-full rounded-3xl border-[3px]"
          style={{borderColor: '#292929'}}
          start={{x: 0.85, y: 0}}
          end={{x: 0, y: 0.85}}
        />
        <View className="absolute w-full h-full p-4 justify-between items-center">
          <Text className="text-white font-bold text-base text-center break-words m-auto">
            {values.answer.trim() ? values.answer.trim() : ''}
          </Text>
        </View>
      </View>
    </FlipCard>
  );
};

export default CardGradientSwipe;
