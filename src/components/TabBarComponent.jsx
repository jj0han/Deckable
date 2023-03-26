import { Text, Pressable, Image } from 'react-native'
import React, { useRef, useEffect } from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const TabBarComponent = ({ active, options, onLayout, onPress, name }) => {
    const ref = useRef(null)

    useEffect(() => {
        if (active && ref.current) {
            ref.current
        }
    }, [active])

    const animatedComponentCircleStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withTiming(active ? 1 : 0, { duration: 250 })
                }
            ]
        }
    })

    const animatedIconContainerStyles = useAnimatedStyle(() => {
        return {
            opacity: withTiming(active ? 1 : 0.8, { duration: 250 })
        }
    })

    return (
        <Pressable onPress={onPress} onLayout={onLayout} className={"top-[2px]"} >
            <Animated.View style={[animatedIconContainerStyles]} className="self-center items-center absolute z-10 top-2">
                {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
                <Text className="text-white text-center text-[12px] font-medium">{name}</Text>
            </Animated.View>
            <Animated.Image source={require('../assets/images/circle.png')} style={[animatedComponentCircleStyles]} className="" />
        </Pressable>
    )
}

export default TabBarComponent