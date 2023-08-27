import React from 'react'
import { SafeAreaView, View } from 'react-native'

const FormBackgroundLayout = ({ children }) => {
    return (
        <SafeAreaView className="flex-1 bg-[#292929] h-screen w-full">
            <>{children}</>
        </SafeAreaView>
    )
}

export default FormBackgroundLayout