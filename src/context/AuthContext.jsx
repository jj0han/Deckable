import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import uuid from 'react-native-uuid'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [loginMessages, setLoginMessages] = useState("")

    GoogleSignin.configure({
        webClientId: '548941474089-lcffm40ou7ripufhf4v6pp6j753s8tk3.apps.googleusercontent.com',
    })

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
            const { idToken } = await GoogleSignin.signIn({ prompt: 'select_account' })
            const googleCredential = auth.GoogleAuthProvider.credential(idToken)
            auth().signInWithCredential(googleCredential)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log("user cancelled the login flow")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log("operation (e.g. sign in) is in progress already")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log("play services not available or outdated")
            } else {
                console.log(error)
            }
            setLoginMessages("Serviço não disponível, verifique sua conexão")
        }
    }

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
            if (await GoogleSignin.isSignedIn()) {
                await GoogleSignin.revokeAccess()
                await GoogleSignin.signOut()
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

    const readUserData = async () => await firestore().collection('decks').get()

    const addUserDeck = async (name, visibility, type) => {
        const generatedID = uuid.v4()
        await firestore()
            .collection('decks')
            .doc(generatedID)
            .set(
                {
                    id: generatedID,
                    uid: auth().currentUser.uid,
                    name: name,
                    visibility: visibility,
                    type: type,
                    createdAt: Date.now(),
                    cards: [],
                }
            )
            .then(() => {
                console.log('User added!')
            })
    }

    const addQACard = async (question, answer, type, deckID) => {
        await firestore()
            .collection('decks')
            .doc(`${deckID}/deck/cards`)
            .add({
                card: {
                    id: uuid.v4(),
                    uid: auth().currentUser.uid,
                    visibility: visibility,
                    type: type,
                    createdAt: Date.now(),
                }
            })
            .then(() => {
                console.log('User added!')
            })
    }

    const removeUserDeck = async (id) => {
        await firestore()
            .collection('decks')
            .doc(id)
            .delete()
            .then(() => {
                console.log('User added!')
            })
    }

    return (
        <AuthContext.Provider value={{ login, signup, logout, setUser, user, isLoading, setIsLoading, loginMessages, signInWithGoogle, readUserData, addUserDeck, removeUserDeck }}>
            {children}
        </AuthContext.Provider>
    )
}