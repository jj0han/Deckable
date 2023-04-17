import React from 'react'
import { SafeAreaView } from 'react-native'

const FormBackgroungLayout = ({ children }) => {
    return (
        <SafeAreaView className="bg-[#292929] flex-1">
            {children}
        </SafeAreaView>
    )
}

export default FormBackgroungLayout