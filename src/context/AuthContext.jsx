import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'
import { Alert } from 'react-native'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [loginMessages, setLoginMessages] = useState("")

    const login = async (email, password, ...params) => {
        try {
            if (email && password !== "") {
                await auth().signInWithEmailAndPassword(email, password)
            } else {
                setLoginMessages("Preencha os campos")
            }
        } catch (e) {
            setLoginMessages("Email ou senha incorretos")
        }
    }

    const signup = async (email, password, userName) => {
        try {
            if (email && password && userName !== "") {
                const userCredential = await auth().createUserWithEmailAndPassword(email, password)
                await userCredential.user.updateProfile({
                    displayName: userName
                })
            } else {
                setLoginMessages("Preencha os campos")
            }
        } catch (e) {
            Alert.alert('Something went wrong', 'Please try again later', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    const logout = async () => {
        try {
            await auth().signOut()
        } catch (e) {
            Alert.alert('Something went wrong', 'Please try again later', [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]);
        }
    }

    return (
        <AuthContext.Provider value={{ login, signup, logout, setUser, user, isLoading, setIsLoading, loginMessages }}>
            {children}
        </AuthContext.Provider>
    )
}