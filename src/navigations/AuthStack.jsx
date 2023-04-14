import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import SignUp from '../screens/SignUp'
import LogIn from '../screens/LogIn'
import OnBoarding from '../screens/OnBoarding'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='OnBoarding'
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                animationEnabled: true,
                headerShadowVisible: false,
                headerTransparent: true,
                gestureEnabled: true,
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#292929',
                },
                title: false,
            }}>
            <Stack.Screen name='OnBoarding' component={OnBoarding} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='Entrar' component={LogIn} />
            <Stack.Screen name='Cadastrar' component={SignUp} />
        </Stack.Navigator>
    )
}

export default AuthStack