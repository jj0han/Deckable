import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { AuthContext } from '../context/AuthContext'
import { View, Text, Image, Pressable, ActivityIndicator } from 'react-native'

const AppNav = () => {
    const { isLoading, userToken } = useContext(AuthContext)

    if(isLoading) {
        <View className="flex-1 justify-center items-center">
            <ActivityIndicator size={'large'}/>
        </View>
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default AppNav