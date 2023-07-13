import React, { useContext, useEffect } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const useHeaderRight = (navigation, color = "#292929") => {

    const { user } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Configurações')}>
                    <View style={{backgroundColor: color}} className="p-[2px] w-[35px] h-[35px] rounded-full" >
                        <Image source={user.photoURL !== null ? { uri: user.photoURL } : require('../assets/images/land.jpg')} className="rounded-full w-full h-full" />
                    </View>
                </TouchableOpacity>
            ),
        });
    }, [navigation])
}

export default useHeaderRight