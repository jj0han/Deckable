import React from 'react'
import { Pressable } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Create from '../screens/Create'
import Trending from '../screens/Trending'
import Home from '../screens/Home'
import { AnimatedTabBar } from '../components/tabBar'

const Tab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRightContainerStyle: {
          marginRight: 25,
        },
        headerRight: () => (
          <Pressable>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="none"
            >
              <Path
                fill="#292929"
                d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm16 16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2H18zM0 18a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V18zM18 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H18z"
              />
            </Svg>
          </Pressable>
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
        tabBarIcon: ({ ref }) => <Svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={27}
          height={24}
          fill="none"
        >
          <Path
            fill="#fff"
            d="M14.429 1.958a2 2 0 0 0-2.676 0L1.996 10.74c-.67.603-.244 1.714.657 1.714.543 0 .984.44.984.984v7.653a2 2 0 0 0 2 2h3.09a2 2 0 0 0 2-2V18a2 2 0 0 1 2-2h.728a2 2 0 0 1 2 2v3.09a2 2 0 0 0 2 2h3.09a2 2 0 0 0 2-2v-7.652c0-.543.44-.984.984-.984.901 0 1.327-1.11.658-1.714l-9.758-8.782z"
          />
        </Svg>,
      }} />
      <Tab.Screen name="Criar" component={Create} options={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: '#292929',
        },
        tabBarIcon: ({ ref }) => <Svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
        >
          <Path
            fill="#fff"
            d="M12 0C5.36 0 0 5.36 0 12s5.36 12 12 12 12-5.36 12-12S18.64 0 12 0zm-1.2 7a1 1 0 0 1 1-1h.4a1 1 0 0 1 1 1v2.8a1 1 0 0 0 1 1H17a1 1 0 0 1 1 1v.4a1 1 0 0 1-1 1h-2.8a1 1 0 0 0-1 1V17a1 1 0 0 1-1 1h-.4a1 1 0 0 1-1-1v-2.8a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1v-.4a1 1 0 0 1 1-1h2.8a1 1 0 0 0 1-1V7z"
          />
        </Svg>,
      }} />
      <Tab.Screen name="Em Alta" component={Trending} options={{
        headerTitleAlign: "center",
        tabBarIcon: ({ ref }) => <Svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={19}
          height={25}
          fill="none"
        >
          <Path
            fill="#fff"
            d="M10.251 1.402 9.13 0l-.827 1.594c-1.42 2.737-3.074 4.643-4.57 6.365-.218.251-.433.499-.643.744C1.479 10.583 0 12.497 0 15.17c0 5.076 4.209 9.142 9.34 9.142 3.633 0 6.793-2.034 8.337-5.018 1.774-3.432.939-7.212-1.761-9.83L14.723 8.31l-.684 1.514v.001l-.006.012-.025.055-.105.216c-.093.19-.23.458-.404.773-.35.635-.834 1.43-1.388 2.125-.576.723-1.126 1.205-1.576 1.39-.201.083-.342.09-.448.069-.103-.02-.274-.085-.506-.316-.14-.14-.175-.247-.187-.353-.015-.14.007-.362.128-.713.12-.35.31-.749.557-1.23l.223-.428.017-.032c.182-.348.38-.727.564-1.105.548-1.124 1.096-2.487 1.14-4.015.046-1.572-.444-3.21-1.772-4.87z"
          />
        </Svg>,
      }} />
    </Tab.Navigator>
  )
}