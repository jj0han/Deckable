import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Create, Home, Trending } from '../screens'
import { AnimatedTabBar } from '../components'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { TEXT_WHITE } from '../constants/colors/textColors'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRightContainerStyle: {
          marginRight: 25,
        },
        headerRight: () => (
          <>
          </>
        ),
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "bold",
          padding: 10
        },
      }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ ref }) => <Entypo name={'home'} size={24} color={TEXT_WHITE} />,
      }} />
      <Tab.Screen name="Criar" component={Create} options={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: '#292929',
        },
        tabBarIcon: ({ ref }) => <AntDesign name={'pluscircle'} size={24} color={TEXT_WHITE} />,
      }} />
      <Tab.Screen name="Em Alta" component={Trending} options={{
        tabBarIcon: ({ ref }) => <FontAwesome5 name={'fire'} size={24} color={TEXT_WHITE} />,
      }} />
    </Tab.Navigator>
  )
}