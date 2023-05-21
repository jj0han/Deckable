import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

const FormBackgroungLayout = ({ children }) => {
    return (
        <SafeAreaView className="flex-1 bg-[#292929] min-h-screen">
            <ScrollView>{children}</ScrollView>
        </SafeAreaView>
    )
}

export default FormBackgroungLayout