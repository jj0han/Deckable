import React, { createContext, useState } from 'react'


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null)

    const login = () => {
        setIsLoading(false)
        setUserToken("orfnwoinmfw")
    }

    const logout = () => {
        setIsLoading(true)
        setUserToken(null)
    }

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}