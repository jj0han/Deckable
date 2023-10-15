import React from "react";
import { Text } from "react-native";
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
  );
};

export default ConfirmDialog;
