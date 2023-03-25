import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomTabBarButton = (props) => {
    const { children, accessibilityState, onPress } = props

    if (accessibilityState.selected) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} className="mx-4 justify-center items-center h-16 w-16 relative top-0 bg-[#6E5DAD] border-white border-4 rounded-full before:content-['hello']">
                <Text>{children}</Text>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={1} className="mx-4 justify-center items-center h-16 w-16 relative top-0">
                <Text>{children}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomTabBarButton