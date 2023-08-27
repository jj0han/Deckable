import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  DARK_BLUE,
  PINK,
  PURPLE,
  WHITE,
} from '../constants/colors/gradientColors';

const CardGradientComponent = ({borderColor = ''}) => {
  return (
    <LinearGradient
      colors={[DARK_BLUE, PURPLE, PINK]}
      className="w-[136px] h-[180px] rounded-3xl border-[3px]"
      style={{
        borderColor: borderColor ? borderColor : WHITE,
      }}
      start={{x: 0, y: 0}}
      end={{x: 0.85, y: 0.85}}
    />
  );
};

export default CardGradientComponent;
