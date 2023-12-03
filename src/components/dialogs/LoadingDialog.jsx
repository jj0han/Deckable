import { BlurView } from "@react-native-community/blur";
import React from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import Dialog from "react-native-dialog";

export default function LoadingDialog({ title, visible }) {
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
          headerStyle={{ alignItems: "center" }}
          contentStyle={{ borderRadius: 15, backgroundColor: "#292929" }}
          footerStyle={{ justifyContent: "space-around" }}
        >
          <Dialog.Title>
            <Text className="font-semibold text-white">{title}</Text>
          </Dialog.Title>
          <Dialog.Description>
            <ActivityIndicator size={"large"} color={"#FFF"} />
          </Dialog.Description>
        </Dialog.Container>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
