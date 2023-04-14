import { ScrollView } from 'react-native'
import React from 'react'

const FormLayout = ({ children }) => {
  return (
    <ScrollView className="bg-white p-5 w-full rounded-t-3xl grow gap-y-10 max-h-[60%]">
        {children}
    </ScrollView>
  )
}

export default FormLayout