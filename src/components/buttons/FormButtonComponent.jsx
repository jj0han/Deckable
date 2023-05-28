import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Shadow } from 'react-native-shadow-2';

const FormButtonComponent = ({ type, title, action, email, password, confirmPassword, userName }) => {

    return (
        <TouchableOpacity onPress={action} style={{elevation: 5}} className="w-[70%] h-12">
            <Shadow distance={20} style={{borderRadius: 15}} stretch={true} startColor={'#A0B0FF40'} endColor='#fff0' paintInside={true} offset={[0, 5]}>
            <Text className="text-white text-xl font-bold text-center absolute z-10 left-0 right-0 top-2">{title}</Text>
            <LinearGradient
                colors={['#4F6597', '#6E5DAD', '#D442EF']}
                className="w-full h-full rounded-lg"
                start={{ x: 0, y: 0 }}
                end={{ x: 0.85, y: 0.85 }}
            />
            </Shadow>
        </TouchableOpacity>
    )
}

export default FormButtonComponent