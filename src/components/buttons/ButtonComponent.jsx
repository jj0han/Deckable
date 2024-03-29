import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Shadow } from "react-native-shadow-2";
import { DARK_BLUE, PINK, PURPLE } from "../../constants/colors/gradientColors";

const ButtonComponent = ({
  title,
  EnableGlow = false,
  isLoading = false,
  width = "70%",
  handlePress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress()}
      style={{ elevation: 5, width: width }}
      disabled={isLoading}
      className="mx-auto my-4 h-12"
    >
      <Shadow
        disabled={!EnableGlow}
        distance={20}
        style={{ borderRadius: 15 }}
        stretch={true}
        startColor={"#A0B0FF40"}
        endColor="#fff0"
        paintInside={true}
        offset={[0, 5]}
      >
        <Text className="absolute left-0 right-0 top-2 z-10 text-center text-xl font-bold text-white">
          {isLoading ? (
            <ActivityIndicator
              color={"#FFF"}
              style={{ zIndex: 20, margin: "auto" }}
            />
          ) : (
            title
          )}
        </Text>
        <LinearGradient
          colors={[DARK_BLUE, PURPLE, PINK]}
          className="h-full w-full rounded-lg"
          start={{ x: 0, y: 0 }}
          end={{ x: 0.85, y: 0.85 }}
        />
      </Shadow>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
