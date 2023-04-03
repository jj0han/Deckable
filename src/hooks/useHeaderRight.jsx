import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Path, Svg } from 'react-native-svg';

const useHeaderRight = (navigation, color = "#292929") => {
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Configurações')}>
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill={color}
                    >
                        <Path
                            fill={color}
                            d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm16 16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2H18zM0 18a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V18zM18 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H18z"
                        />
                    </Svg>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
}

export default useHeaderRight