import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'
import { AuthProvider } from './src/context/AuthContext'
import AppNav from './src/navigations/AppNav'

const App = () => {
    return (
        <AuthProvider>
            <TailwindProvider>
                <AppNav />
            </TailwindProvider>
        </AuthProvider>
    )
}

export default App