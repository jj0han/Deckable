import React, {useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';
import {View, ActivityIndicator} from 'react-native';
import {AppStack, AuthStack} from '../navigations';

const AppNav = () => {
  const {user, setUser, isLoading, setIsLoading} = useContext(AuthContext);

  const onAuthStateChanged = user => {
    setUser(user);
    if (isLoading) setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isLoading) return null;

  // if(isLoading) {
  //     <View className="flex-1 justify-center items-center">
  //         <ActivityIndicator size={'large'}/>
  //     </View>
  // }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
