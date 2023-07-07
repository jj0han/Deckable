import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { DARK_BLUE, PINK, PURPLE } from '../../constants/colors/gradientColors'
import { Shadow } from 'react-native-shadow-2'

const ButtonNavComponent = ({ title, navigation, screen, params = {}, border = false, EnableGlow=false, fullWidth = false, time = 0, disabled= false }) => {
    const navigate = () => {
        setTimeout(() => { navigation.navigate(screen, params) }, time)
    }

    return (
        <TouchableOpacity onPress={() => navigate()} disabled={disabled} style={{ width: fullWidth ? "100%" : "70%" }} className="mb-4 h-12">
            <Shadow disabled={!EnableGlow} distance={20} style={{borderRadius: 15}} stretch={true} startColor={'#A0B0FF40'} endColor='#fff0' paintInside={true} offset={[0, 5]}>
            <Text className="text-white text-xl font-bold text-center absolute z-10 left-0 right-0 top-2">{title}</Text>
            <LinearGradient
                colors={disabled ? ["#292929", "#3A3A3A", "#5A5A5A"] : [DARK_BLUE, PURPLE, PINK]}
                className="w-full h-full rounded-lg"
                start={{ x: 0, y: 0 }}
                end={{ x: 0.85, y: 0.85 }}
            />
            {border ? <View className="absolute bg-[#292929] w-[95%] h-[35px] rounded-md right-[2.5%] top-[7px]"></View> : null}
            </Shadow>
        </TouchableOpacity>

    )
}

export default ButtonNavComponent