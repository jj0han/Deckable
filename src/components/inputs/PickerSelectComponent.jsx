import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {Chevron} from 'react-native-shapes';

const PickerSelectComponent = ({
  setValue,
  items,
  placeholder = 'Select',
  label = 'Label',
  white = false,
  disabled = false,
  labelAtTop = true,
}) => {
  const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
      width: '100%',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: labelAtTop ? 0 : 30,
    },
  });

  return (
    <View
      className={`${
        labelAtTop ? '' : 'flex-row text-center items-center'
      } z-50`}>
      <Text
        className="font-bold text-base ml-[2px] mr-2"
        style={{color: white ? '#ffffff' : '#000000'}}>
        {label}
      </Text>
      <RNPickerSelect
        onValueChange={value => setValue(value)}
        items={items}
        fixAndroidTouchableBug
        style={{
          ...pickerSelectStyles,
          iconContainer: {
            top: 20,
            right: 12,
          },
          viewContainer: {},
        }}
        useNativeAndroidPickerStyle={false}
        placeholder={placeholder}
        disabled={disabled}
        Icon={() => {
          return <Chevron size={1.5} color="gray" />;
        }}
      />
    </View>
  );
};

export default PickerSelectComponent;
