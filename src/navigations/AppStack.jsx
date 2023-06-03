import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { BottomTabNavigator } from '../navigations';
import { Settings } from '../screens';
import { CreateCard, EditCards } from '../features';
import ViewDeck from '../features/Home/ViewDeck';

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
            headerStyle: {
                backgroundColor: '#292929', 
            },
            headerTitleStyle: {
                fontWeight: '900',
                color: 'white',
            },
            headerTitleAlign: "center",
            headerTitleContainerStyle: {
                marginLeft: 40
            },
            headerRightContainerStyle: {
                marginRight: 25,
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
                    ...TransitionPresets.ModalPresentationIOS,
                }}
            />
            <Stack.Screen
                name='Criar Carta'
                component={CreateCard}
            />
            <Stack.Screen
                name='Ver Deck'
                component={ViewDeck}
            />
            <Stack.Screen
                name='Editar Cartas'
                component={EditCards}
            />
        </Stack.Navigator>
    )
}

export default AppStack