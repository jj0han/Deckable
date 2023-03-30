import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import React from 'react'
import Cadastrar from '../screens/Cadastrar'
import Entrar from '../screens/Entrar'
import OnBoarding from '../screens/OnBoarding'

const Stack = createStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='OnBoarding'
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                animationEnabled: true,
            }}>
            <Stack.Screen name='OnBoarding' component={OnBoarding} options={{
                headerShown: false,
            }} />
            <Stack.Screen name='Entrar' component={Entrar} />
            <Stack.Screen name='Cadastrar' component={Cadastrar} />
        </Stack.Navigator>
    )
}

export default AuthStack