import React, { useRef, useEffect } from 'react'
import { Text, Pressable } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'

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
            opacity: withTiming(active ? 1 : 0.5, { duration: 250 })
        }
    })

    return (
        <Pressable onPress={onPress} onLayout={onLayout} className={"top-[2px]"} >
            <Animated.View style={[animatedIconContainerStyles]} className="self-center items-center absolute z-10 top-2">
                {options.tabBarIcon ? options.tabBarIcon({ ref }) : <Text>?</Text>}
                <Text className="text-white text-center text-[12px] font-semibold">{name}</Text>
            </Animated.View>
            <Animated.View style={[animatedComponentCircleStyles]}>
                <LinearGradient
                    colors={['#4F6597', '#6E5DAD', '#D442EF']}
                    className="w-[59px] h-[59px] rounded-full"
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.85, y: 0.85 }} />
            </Animated.View>
            {/* <Animated.Image source={require('../assets/images/circle.png')} style={[animatedComponentCircleStyles]} /> */}
        </Pressable>
    )
}

export default TabBarComponent