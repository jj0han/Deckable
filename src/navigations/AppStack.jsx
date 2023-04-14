import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Settings from '../screens/Settings'
import BottomTabNavigator from './BottomTabNavigator'
import CreateCard from '../screens/CreateCard'

const Stack = createStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            animationEnabled: true,
            gestureEnabled: true,
            headerTransparent: false,
            headerShadowVisible: false,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: '900',
                color: 'white',
            },
            headerStyle: {
                backgroundColor: '#292929',
            },
        }}>
            <Stack.Screen
                name='BottomTabNavigator'
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen
                name='Configurações'
                component={Settings}
                options={{
                    headerTitleAlign: 'center',
                    ...TransitionPresets.ModalPresentationIOS,
                }}
            />
            <Stack.Screen
                name='Criar Carta'
                component={CreateCard}
                options={{
                    headerTitleAlign: 'center',
                }}
            />
        </Stack.Navigator>
    )
}

export default AppStack