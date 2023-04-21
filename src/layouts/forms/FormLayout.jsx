import React from 'react'
import { ScrollView, View } from 'react-native'

const FormLayout = ({ children, grow }) => {
  return (
    <View style={{flexGrow: grow}} className="bg-white px-6 py-10 w-full rounded-t-3xl">
        <ScrollView>{children}</ScrollView>
    </View>
  )
}

export default FormLayout