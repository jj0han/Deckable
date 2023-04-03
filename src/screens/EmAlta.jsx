import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useHeaderRight from '../hooks/useHeaderRight'

const EmAlta = ({ navigation }) => {

  useHeaderRight(navigation, "#292929")

  return (
    <View className="flex-1 bg-white">
      <Text className="text-black">EmAlta</Text>
    </View>
  )
}

export default EmAlta