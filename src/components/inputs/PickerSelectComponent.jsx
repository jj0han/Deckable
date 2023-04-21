import React from 'react'
import { StyleSheet, Text } from 'react-native'
import RNPickerSelect from "react-native-picker-select"
import { Chevron } from 'react-native-shapes'

const PickerSelectComponent = ({ setValue, items, placeholder = "Select", label = "Label", white = false, disabled = false }) => {
    const pickerSelectStyles = StyleSheet.create({
        inputAndroid: {
            width: "100%",
            fontSize: 16,
            fontWeight: "bold",
        },
    })

    return (
        <>
            <Text className="font-bold text-base ml-[2px]" style={{color: white ? "#ffffff" : "#000000"}}>{label}</Text>
            <RNPickerSelect
                onValueChange={(value) => setValue(value)}
                items={items}
                style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                        top: 20,
                        right: 12,
                    },
                    viewContainer: {
                        
                    }
                }}
                useNativeAndroidPickerStyle={false}
                placeholder={placeholder}
                placeholderTextColor="red"
                disabled={disabled}
                Icon={() => {
                    return <Chevron size={1.5} color="gray" />;
                }}
            />
        </>
    )
}

export default PickerSelectComponent