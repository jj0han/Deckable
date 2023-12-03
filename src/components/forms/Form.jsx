import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Field } from "formik";
import { AuthContext } from "../../context/AuthContext";
import { FormBackgroundLayout, FormLayout } from "../../layouts";
import { Google } from "../../assets/images/svgs";
import FormikForm from "./FormikForm";
import FormikButton from "./FormikButton";
import FormikFormField from "./FormikFormField";
import { loginSchema, signupSchema } from "../../constants/schemas/yupSchemas";

const Form = ({ type = "login" }) => {
  const { login, signup, loginMessages, signInWithGoogle } =
    useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <FormBackgroundLayout>
      <View className="h-[30%] items-center justify-center">
        <Text className="text-5xl font-bold text-white">Deckable</Text>
        <Text className="text-xl font-extralight text-white">
          Seu app de revisões
        </Text>
      </View>
      <FormLayout height={0.7}>
        <FormikForm
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            if (type === "signup") {
              signup(values.email, values.password, values.name);
            } else {
              login(values.email, values.password, setIsLoading);
            }
            resetForm();
          }}
          validationSchema={type === "signup" ? signupSchema : loginSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <View className="w-full">
            <Text className="text-3xl font-semibold tracking-widest text-black">
              {type === "signup" ? "Cadastrar" : "Entrar"}
            </Text>
            <Text className="text-base font-semibold text-[#666666]">
              Faça seu cadastro para continuar
            </Text>
          </View>
          {loginMessages !== "" ? (
            <Text className="text-red-600">{loginMessages}</Text>
          ) : null}
          {type === "signup" && (
            <Field
              component={FormikFormField}
              name={"name"}
              placeholder={"Nome de usuário"}
            />
          )}
          <Field
            component={FormikFormField}
            name={"email"}
            placeholder={"E-mail"}
          />
          <Field
            component={FormikFormField}
            name={"password"}
            placeholder={"Senha"}
            secureTextEntry
          />
          {type === "signup" && (
            <Field
              component={FormikFormField}
              name={"confirmPassword"}
              placeholder={"Confirmar Senha"}
              secureTextEntry
            />
          )}
          <FormikButton
            title={"Entrar"}
            EnableGlow={true}
            isLoading={isLoading}
          />
          <View className="w-full items-center">
            <View className="my-5 w-full flex-row items-center justify-center">
              <View className="grow border-b border-[#d7d7d7]" />
              <Text className="mx-2 text-center text-base font-semibold text-[#666666]">
                Ou
              </Text>
              <View className="grow border-b border-[#d7d7d7]" />
            </View>
            <TouchableOpacity
              onPress={() => signInWithGoogle()}
              className="h-12 w-full flex-row items-center justify-center rounded-lg border-[1px] border-[#D7D7D7] bg-[#F7F7F7] px-4"
            >
              <Google />
              <Text className="ml-5 font-semibold text-[#8a8a8a]">
                Continuar com Google
              </Text>
            </TouchableOpacity>
          </View>
        </FormikForm>
      </FormLayout>
    </FormBackgroundLayout>
  );
};

export default Form;
