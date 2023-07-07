import { View, TextInput } from 'react-native'
import React from 'react'
import { SearchIcon } from '../../assets/images/svgs'

const SearchInput = ({ placeholder, children, dark=false }) => {
  return (
    <View className={`${!dark ? "bg-[#F7F7F7] text-black border-[#D7D7D7]" : "bg-[#3A3A3A] text-white border-[#4E4E4E]"} flex-1 flex-row my-4 border-[1px] rounded-full`}>
        <View className="h-full justify-center items-center px-3">
            <SearchIcon color={!dark ? "#000" : "#fff"}/>
        </View>
        <TextInput className={`${!dark ? "text-black" : "text-white"} grow px-2`} placeholder={placeholder} placeholderTextColor={!dark ? '#000': "#fff"} />
        {children}
    </View>
  )
}

export default SearchInput