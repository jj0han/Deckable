import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Dialog from 'react-native-dialog';
import {
  ACID_GREEN_200,
  DARK_BLUE,
  GRAPE_PURPLE_200,
  GRAPE_PURPLE_800,
  GUM_PINK_400,
  PASSION_RED_100,
  PINK,
  PURPLE,
  SKY_BLUE_100,
  SKY_BLUE_300,
  SNOW_WHITE_200,
  SUN_YELLOW_100,
} from '../../constants/colors/gradientColors';
import LinearGradient from 'react-native-linear-gradient';

const ChangeColorSchemeDialog = ({title, handleCancel, visible}) => {
  return (
    <Dialog.Container
      visible={visible}
      onBackdropPress={handleCancel}
      headerStyle={{alignItems: 'center'}}
      contentStyle={{borderRadius: 15, backgroundColor: '#292929'}}
      footerStyle={{justifyContent: 'space-around'}}>
      <Dialog.Title>
        <Text className="text-white font-semibold">{title}</Text>
      </Dialog.Title>
      <Dialog.Button
        label="Cancelar"
        onPress={handleCancel}
        bold={true}
        color={'#6E5DAD'}
      />
      <View className="flex-row justify-around py-5">
        <TouchableOpacity>
          <LinearGradient
            colors={[DARK_BLUE, PURPLE, PINK]}
            className="w-[45px] h-[45px] rounded-full border-[3px] border-white z-20"
            start={{x: 0, y: 0}}
            end={{x: 0.85, y: 0.85}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={[SKY_BLUE_100, SKY_BLUE_300, ACID_GREEN_200]}
            className="w-[45px] h-[45px] rounded-full border-[3px] border-white z-20"
            start={{x: 0, y: 0}}
            end={{x: 0.85, y: 0.85}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={[PASSION_RED_100, GUM_PINK_400, SUN_YELLOW_100]}
            className="w-[45px] h-[45px] rounded-full border-[3px] border-white z-20"
            start={{x: 0, y: 0}}
            end={{x: 0.85, y: 0.85}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            colors={[SNOW_WHITE_200, GRAPE_PURPLE_200, GRAPE_PURPLE_800]}
            className="w-[45px] h-[45px] rounded-full border-[3px] border-white z-20"
            start={{x: 0, y: 0}}
            end={{x: 0.85, y: 0.85}}
          />
        </TouchableOpacity>
      </View>
    </Dialog.Container>
  );
};

export default ChangeColorSchemeDialog;
