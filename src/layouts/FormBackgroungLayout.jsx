import { SafeAreaView } from 'react-native'
import React from 'react'

const FormBackgroungLayout = ({ children }) => {
    return (
        <SafeAreaView className="bg-[#292929] flex-1 justify-end">
            {children}
        </SafeAreaView>
    )
}

export default FormBackgroungLayout