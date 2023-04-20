import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Path, Svg } from 'react-native-svg'

const SettingsButtonComponent = ({ action, textColor = "#000000", Icon, text }) => {
    return (
        <TouchableOpacity  className="flex flex-row items-center gap-x-10 p-5">
            <Icon />
            <Text style={{color: textColor}} className="text-black text-base">{text}</Text>
        </TouchableOpacity>
    )
}

export default SettingsButtonComponent