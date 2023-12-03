import React from "react";
import { StyleSheet, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";
import Dialog from "react-native-dialog";
import { BlurView } from "@react-native-community/blur";

const ChangeUserNameDialog = ({
  visible,
  setVisible,
  handleCancel,
  title,
  errorMessage,
  useName,
  newUserName,
  setNewUserName,
  setUserName,
  showError,
  setShowError,
}) => {
  const handleChangeUserName = (newUserName) => {
    if (newUserName.trim() !== "") {
      auth().currentUser.updateProfile({
        displayName: newUserName.trim(),
      });
      setVisible(false);
      setShowError(false);
      setUserName(newUserName.trim());
      setNewUserName("");
    } else {
      setShowError(true);
    }
  };

  return (
    visible && (
      <View
        className={
          "absolute bottom-0 left-0 right-0 top-0 z-[2147483647] flex-1 items-center justify-center"
        }
      >
        <BlurView
          style={styles.absolute}
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
        <Dialog.Container
          visible={visible}
          onBackdropPress={handleCancel}
          headerStyle={{ alignItems: "center" }}
          contentStyle={{ borderRadius: 15, backgroundColor: "#292929" }}
          footerStyle={{ justifyContent: "space-around" }}
        >
          <Dialog.Title>
            <Text className="font-semibold text-white">{title}</Text>
          </Dialog.Title>
          <Dialog.Input
            onChange={(e) => setNewUserName(e.nativeEvent.text)}
            style={{ color: "white", fontWeight: "700" }}
            value={newUserName}
            placeholder={useName}
            textAlign="center"
            wrapperStyle={{ paddingHorizontal: 10 }}
          />
          {showError && (
            <Dialog.Description>
              <Text className="font-medium text-red-500">{errorMessage}</Text>
            </Dialog.Description>
          )}
          <Dialog.Button
            label="Cancelar"
            onPress={handleCancel}
            bold={true}
            color={"#6E5DAD"}
          />
          <Dialog.Button
            label="Salvar"
            style={{ backgroundColor: "#6E5DAD", borderRadius: 7 }}
            onPress={() => handleChangeUserName(newUserName)}
            bold={true}
            color={"#FFFFFF"}
          />
        </Dialog.Container>
      </View>
    )
  );
};
const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default ChangeUserNameDialog;
