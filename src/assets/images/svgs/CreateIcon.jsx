
import React from 'react'
import { View } from 'react-native'
import { Path, Svg } from 'react-native-svg'
import { DARK_BLUE, PINK, PURPLE } from '../../../constants/colors/gradientColors'
import LinearGradient from 'react-native-linear-gradient'
import { LAYOUT_WHITE } from '../../../constants/colors/layoutColors'

export default function CreateIcon() {
    return (
        <View className="w-[35px] h-[35px]">
            <LinearGradient
                colors={[DARK_BLUE, PURPLE, PINK]}
                className="absolute w-full h-full rounded-full"
                start={{ x: 0, y: 0 }}
                end={{ x: 0.85, y: 0.85 }}
            />
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={35}
                fill="none"
            >
                <Path
                    fill={LAYOUT_WHITE}
                    d="M18 6C11.36 6 6 11.36 6 18s5.36 12 12 12 12-5.36 12-12S24.64 6 18 6zm-1.2 6h2.4v4.8H24v2.4h-4.8V24h-2.4v-4.8H12v-2.4h4.8V12z"
                >
                </Path>
            </Svg>
        </View>
    )
}