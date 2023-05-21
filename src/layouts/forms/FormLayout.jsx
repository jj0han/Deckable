import React from 'react'
import { ScrollView, View } from 'react-native'

const FormLayout = ({ children, grow }) => {

  return (
    <>
      <View style={{ flexGrow: grow }} className="z-10 bg-white px-6 py-5 pt-5 w-full min-h-screen justify-items-end rounded-t-3xl">
        <View className="bg-[#292929] mb-5 w-10 h-1 mx-auto rounded-full"/>
          {children}
      </View>
    </>
  )
}

export default FormLayout