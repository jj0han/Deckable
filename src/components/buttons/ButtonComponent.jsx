import React, { useContext } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { AuthContext } from '../../context/AuthContext'

const ButtonComponent = ({ title, question, answer, type, deckID, fullWidth = false }) => {
    const { addCard } = useContext(AuthContext)
    return (
        <TouchableOpacity onPress={() => addCard(question, answer, type, deckID)} className="max-w-[232px] h-12" style={{ width: fullWidth ? "100%" : "70%" }}>
            <Text className="text-white text-xl font-bold text-center absolute z-10 left-0 right-0 top-2">{title}</Text>
            <LinearGradient
                colors={['#4F6597', '#6E5DAD', '#D442EF']}
                className="w-full h-full rounded-lg"
                start={{ x: 0, y: 0 }}
                end={{ x: 0.85, y: 0.85 }}
            />
        </TouchableOpacity>
    )
}

export default ButtonComponent