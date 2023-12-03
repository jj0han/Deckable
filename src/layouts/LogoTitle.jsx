const LogoTitle = (props) => {
  return (
    <View>
      <Text className={"text-center text-lg font-bold text-white"}>
        {props.title}
      </Text>
      <Text className={"text-center text-xs font-medium text-white"}>
        {props.subtitle}
      </Text>
    </View>
  );
};

export default { LogoTitle };
