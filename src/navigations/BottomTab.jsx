import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Criar from '../screens/Criar'
import EmAlta from '../screens/EmAlta'
import Home from '../screens/Home'
import CustomTabBarButton from '../components/CustomTabBarButton'

const Tab = createBottomTabNavigator()

export default function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: style.tabBarStyle,
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarActiveTintColor: '#FFFFFF',
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarButton: props => <CustomTabBarButton {...props} />
      }} />
      <Tab.Screen name="Criar" component={Criar} options={{
        tabBarButton: props => <CustomTabBarButton {...props} />
      }} />
      <Tab.Screen name="Em Alta" component={EmAlta} options={{
        tabBarButton: props => <CustomTabBarButton {...props} />
      }} />
    </Tab.Navigator>
  )
}

const style = StyleSheet.create({
  tabBarStyle: {
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#292929',
    borderTopWidth: 0,
    bottom: 10,
    left: 20,
    right: 20,
    borderRadius: 50,
    height: 70,
  },
})