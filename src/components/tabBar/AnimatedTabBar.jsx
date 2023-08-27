import React, { useReducer } from 'react'
import { View, StyleSheet } from 'react-native'
import { Svg, Path } from 'react-native-svg'
import Animated, { useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import TabBarComponent from './TabBarComponent'
import { LAYOUT_DARK_GRAY, LAYOUT_WHITE } from '../../constants/colors/layoutColors'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

const AnimatedTabBar = ({ state: { index: activeIndex, routes }, navigation, descriptors }) => {
    const reducer = (state, action) => {
        return [...state, { x: action.x, index: action.index }]
    }

    const [layout, dispatch] = useReducer(reducer, [])

    const handleLayout = (event, index) => {
        dispatch({ x: event.nativeEvent.layout.x, index })
    }

    const xOffSet = useDerivedValue(() => {
        if (layout.length !== routes.length) return 0

        return [...layout].find(({ index }) => index === activeIndex).x - 35
    }, [activeIndex, layout])

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: withTiming(xOffSet.value, { duration: 250 }) }],
        }
    })

    return (
        <View style={{ backgroundColor: LAYOUT_DARK_GRAY, }} className="absolute bottom-0 left-0 right-0 h-[70px]">
            <AnimatedSvg
                xmlns="http://www.w3.org/2000/svg"
                width={129}
                height={65}
                fill={LAYOUT_WHITE}
                style={[styles.activeBackground, animatedStyles]}
            >
                <Path
                    fill={LAYOUT_WHITE}
                    d="M32 0h65v32.5C97 50.45 82.45 65 64.5 65S32 50.45 32 32.5V0zM32 32V0H0c17.673 0 32 14.327 32 32zm65 0V0h32c-17.673 0-32 14.327-32 32z"
                />
            </AnimatedSvg>
            <View className="flex-row justify-evenly">
                {
                    routes.map((route, index) => {
                        const active = index === activeIndex
                        const { options } = descriptors[route.key]
                        return (
                            <TabBarComponent key={route.key} name={route.name} options={options} active={active} onPress={() => navigation.navigate(route.name)} onLayout={(e) => handleLayout(e, index)} />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    activeBackground: {
        position: "absolute",
    }
})

export default AnimatedTabBar