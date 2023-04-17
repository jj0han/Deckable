import React from 'react'
import { TextInput } from 'react-native'

const TextInputComponent = ({ value, placeholder, setHandleText, password = false }) => {
  return (
    <TextInput onChange={(e) => setHandleText(e.nativeEvent.text)} value={value} secureTextEntry={password} placeholder={placeholder} placeholderTextColor={"#8a8a8a"} className="bg-[#F7F7F7] font-semibold text-black border-[#D7D7D7] border-[1px] px-4 rounded-2xl w-full" />
  )
}

export default TextInputComponent