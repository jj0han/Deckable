import { View, TextInput } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";

const SearchInput = ({
  placeholder,
  children,
  dark = false,
  onChange,
  value,
}) => {
  return (
    <View
      className={`${
        !dark
          ? "border-[#D7D7D7] bg-[#F7F7F7] text-black"
          : "border-[#4E4E4E] bg-[#3A3A3A] text-white"
      } my-4 min-h-[48px] flex-1 flex-row rounded-full border-[1px]`}
    >
      <View className="h-full items-center justify-center px-3">
        <AntDesign
          name={"search1"}
          size={24}
          color={!dark ? "#292929" : "#ffffff"}
        />
      </View>
      <TextInput
        onChangeText={onChange}
        value={value}
        className={`${!dark ? "text-black" : "text-white"} grow px-2`}
        placeholder={placeholder}
        placeholderTextColor={!dark ? "#000" : "#fff"}
      />
      {children}
    </View>
  );
};

export default SearchInput;
