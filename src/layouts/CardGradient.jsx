import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const CardGradient = ({ color = "#ffffff" }) => {
    return (
        <LinearGradient
            colors={['#4F6597', '#6E5DAD', '#D442EF']}
            className={`w-[136px] h-[180px] rounded-3xl border-[3px] border-[${color}]`}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.85, y: 0.85 }}
        />
    )
}

export default CardGradient