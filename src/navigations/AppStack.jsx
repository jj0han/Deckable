import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { View, Text, Image, Pressable } from 'react-native'
import Configuracoes from '../screens/Configuracoes'
import BottomTab from './BottomTabNavigator'

const Stack = createStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            animationEnabled: true,
            headerShadowVisible: false,
            headerTitleStyle: {
                fontWeight: '900',
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#292929',
            },
        }}>
            <Stack.Screen
                name='BottomTab'
                component={BottomTab}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen
                name='Configurações'
                component={Configuracoes}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}

export default AppStack