import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import Home from '../screens/Home'
import Criar from '../screens/Criar'
import EmAlta from '../screens/EmAlta'
import BottomTab from './BottomTab'
import Perfil from '../screens/Perfil'

const Stack = createStackNavigator();

function Navigator() {
    return (
        <TailwindProvider>
            <Stack.Navigator screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                animationEnabled: true,
            }}>
                <Stack.Screen
                    name='BottomTab'
                    component={BottomTab}
                    options={{
                        headerShown: false,
                    }} />
                <Stack.Screen
                    name='Perfil'
                    component={Perfil}
                    options={{
                        headerTitleAlign: 'center',
                    }}
                />
                {/* <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Criar" component={Criar} />
                <Stack.Screen name="EmAlta" component={EmAlta} /> */}
            </Stack.Navigator>
        </TailwindProvider>
    )
}

export default Navigator