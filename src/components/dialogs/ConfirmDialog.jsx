import { BlurView } from "@react-native-community/blur";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dialog from "react-native-dialog";

const ConfirmDialog = ({
  title,
  action,
  handleCancel,
  visible,
  onlyConfirm = false,
  labels = ["Cancelar", "Confirmar"],
}) => {
  return (
    visible && (
      <View
        className={
          "absolute bottom-0 left-0 right-0 top-0 z-50 flex-1 items-center justify-center"
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
          {!onlyConfirm && (
            <Dialog.Button
              label={labels[0]}
              onPress={handleCancel}
              bold={true}
              color={"#6E5DAD"}
            />
          )}
          <Dialog.Button
            label={labels[1]}
            style={{ backgroundColor: "#6E5DAD", borderRadius: 7 }}
            onPress={() => action()}
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

export default ConfirmDialog;
