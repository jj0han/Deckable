import React, { useState } from "react";
import ConfirmDialog from "../dialogs/ConfirmDialog";
import { View, TouchableOpacity, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { deleteDeck } from "../../services/firestore";

function ButtonDialogueComponent({
  title,
  navigateFn,
  useRemove = false,
  removeFn,
  border = false,
  fullWidth = false,
  time = 0,
  dialogText,
}) {
  const navigate = () => {
    if (useRemove) {
      console.log("removed");
      // deleteDeck(id, uid)
      removeFn();
      setVisible(false);
    }
    setTimeout(() => {
      navigateFn();
    }, time);
  };

  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
  };

  const deleteDialog = () => {
    setVisible(true);
  };

  return (
    <>
      <ConfirmDialog
        title={dialogText}
        visible={visible}
        handleCancel={handleCancel}
        action={navigate}
      />
      <TouchableOpacity
        onPress={() => deleteDialog()}
        style={{ width: fullWidth ? "100%" : "70%" }}
        className="mb-4 h-12"
      >
        <Text className="absolute left-0 right-0 top-2 z-10 text-center text-xl font-bold text-white">
          {title}
        </Text>
        <LinearGradient
          colors={["#4F6597", "#6E5DAD", "#D442EF"]}
          className="h-full w-full rounded-lg"
          start={{ x: 0, y: 0 }}
          end={{ x: 0.85, y: 0.85 }}
        />
        {border ? (
          <View className="absolute right-[2.5%] top-[7px] h-[35px] w-[95%] rounded-md bg-[#292929]"></View>
        ) : null}
      </TouchableOpacity>
    </>
  );
}

export default ButtonDialogueComponent;
