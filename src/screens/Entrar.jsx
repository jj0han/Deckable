import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Entrar = () => {
    const { login } = useContext(AuthContext)
    
    return (
        <View>
            <Text>Entrar</Text>
            <Button title='Entrar' onPress={() => login()} />
        </View>
    )
}

export default Entrar