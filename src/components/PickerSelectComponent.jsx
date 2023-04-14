import { StyleSheet, Text } from 'react-native'
import RNPickerSelect from "react-native-picker-select"
import { Chevron } from 'react-native-shapes'
import React from 'react'

const PickerSelectComponent = ({ setValue, items, placeholder = "Select", label = "Label", white = false }) => {

    const pickerSelectStyles = StyleSheet.create({
        inputAndroid: {
            width: "100%",
            fontSize: 16,
            color: white ? "#ffffff" : "#666666",
            fontWeight: "bold",
        },
    })

    return (
        <>
            <Text className="font-bold text-base" style={{color: white ? "#ffffff" : "#000000"}}>{label}</Text>
            <RNPickerSelect
                onValueChange={(value) => setValue(value)}
                items={items}
                style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                        top: 20,
                        right: 12,
                    },
                }}
                useNativeAndroidPickerStyle={false}
                placeholder={placeholder}
                Icon={() => {
                    return <Chevron size={1.5} color="gray" />;
                }}
            />
        </>
    )
}



export default PickerSelectComponent