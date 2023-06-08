import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

const FormBackgroundLayout = ({ children }) => {
    return (
        <SafeAreaView className="flex-1 bg-[#292929] min-h-screen w-full">
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    )
}

export default FormBackgroundLayout