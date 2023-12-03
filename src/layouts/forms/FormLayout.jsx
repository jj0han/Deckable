import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { Modalize } from "react-native-modalize";

const FormLayout = ({
  children,
  height = 0.6,
  avoidKeyboardLikeIOS = true,
}) => {
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get("window").height
  );

  useEffect(() => {
    setScreenHeight(Dimensions.get("window").height);
  }, []);

  return (
    <>
      <Modalize
        alwaysOpen={screenHeight * height}
        handlePosition="inside"
        modalStyle={{ padding: 24, marginTop: 20 }}
        avoidKeyboardLikeIOS={avoidKeyboardLikeIOS}
      >
        {children}
      </Modalize>
    </>
  );
};

export default FormLayout;
