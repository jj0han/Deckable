import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { FormBackgroundLayout, FormLayout } from "../layouts";
import { ChangeUserNameDialog, ConfirmDialog } from "../components";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LAYOUT_DARK_GRAY } from "../constants/colors/layoutColors";

const Settings = ({ navigation }) => {
  const { logout, user } = useContext(AuthContext);
  const date = new Date(user.metadata.creationTime);
  const [visible, setVisible] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userName, setUserName] = useState(auth().currentUser.displayName);
  const [newUserName, setNewUserName] = useState("");

  const showDialog = () => {
    setVisible(true);
    setShowError(false);
    setNewUserName("");
  };

  const handleCancel = () => {
    setVisible(false);
    setShowLogOut(false);
  };

  const logOutDialogue = () => {
    setShowLogOut(true);
  };

  function LogoTitle() {
    return (
      <View>
        <Text className={"text-center text-lg font-bold text-white"}>
          {userName}
        </Text>
        <Text className={"text-center text-xs font-medium text-white"}>
          {user.email}
        </Text>
      </View>
    );
  }

  useEffect(() => {
    navigation.setOptions({ headerTitle: (props) => <LogoTitle {...props} /> });
  }, []);

  return (
    <>
      <ChangeUserNameDialog
        title={"Alterar nome de Usuário"}
        visible={visible}
        setVisible={setVisible}
        showError={showError}
        setShowError={setShowError}
        handleCancel={handleCancel}
        errorMessage={"Digite um nome válido!"}
        useName={userName}
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        setUserName={setUserName}
      />

      <ConfirmDialog
        title={"Deseja mesmo sair?"}
        visible={showLogOut}
        handleCancel={handleCancel}
        action={logout}
      />

      <FormBackgroundLayout>
        <View className="h-2/5 items-center gap-y-5 py-5 pt-20">
          <Image
            source={
              user.photoURL !== null
                ? { uri: user.photoURL }
                : require("../assets/images/land.jpg")
            }
            className="h-[150px] w-[150px] rounded-full"
          />
          {date && (
            <Text className="text-white">
              Entrou em: {date.toLocaleDateString("pt-BR")}
            </Text>
          )}
        </View>
        <FormLayout height={0.55}>
          <View className="gap-y-10">
            <TouchableOpacity
              onPress={showDialog}
              className="flex flex-row items-center gap-x-10 p-5"
            >
              <MaterialCommunityIcons
                color={LAYOUT_DARK_GRAY}
                name={"pencil"}
                size={20}
              />
              <Text className="text-base text-black">
                Alterar nome de usuário
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => logOutDialogue()}
              className="flex flex-row items-center gap-x-10 p-5"
            >
              <MaterialIcons
                color={"rgb(239 68 68)"}
                name={"logout"}
                size={20}
              />
              <Text className="ml-2 text-base text-red-500">Sair da conta</Text>
            </TouchableOpacity>
          </View>
        </FormLayout>
      </FormBackgroundLayout>
    </>
  );
};

export default Settings;
