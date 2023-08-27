import React, { useRef, useState, useEffect } from 'react'
import { Dimensions, ScrollView, View } from 'react-native'
import { Modalize } from 'react-native-modalize'

const FormLayout = ({ children, grow, height = 0.6, avoidKeyboardLikeIOS = true }) => {
  const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    setScreenHeight(Dimensions.get('window').height)
  }, []);

  return (
    <>
      {/* <View style={{ flexGrow: grow }} className="z-10 bg-white px-6 py-5 pt-5 w-full min-h-screen justify-items-end rounded-t-3xl overflow-y-scroll">
        <View className="bg-[#292929] mb-5 w-10 h-1 mx-auto rounded-full" />
        {children}
        <View className="w-full h-40" />
      </View> */}
      <Modalize
        alwaysOpen={screenHeight * height}
        handlePosition='inside'
        modalStyle={{ padding: 24, marginTop: 20 }}
        avoidKeyboardLikeIOS={avoidKeyboardLikeIOS}
      >
        {children}
      </Modalize>
    </>
  )
}

export default FormLayout