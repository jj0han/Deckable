import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Svg, Path } from 'react-native-svg'

const Home = ({ navigation }) => {

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate('Perfil')}>
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        fill="none"
                    >
                        <Path
                            fill="#292929"
                            d="M2 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm16 16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V18a2 2 0 0 0-2-2H18zM0 18a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V18zM18 0a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H18z"
                        />
                    </Svg>
                </Pressable>
            ),
        });
    }, [navigation]);

    return (
        <ScrollView className="bg-white flex-1">
            <SafeAreaView className="px-6">
                <TextInput className="bg-[#F7F7F7] border-[#D7D7D7] border-[1px] my-3 px-4 rounded-full w-full" placeholder='Pesquisar...' placeholderTextColor={"#000"} />
                <View className="bg-black my-3 px-4 rounded-3xl w-full">
                    <Text className="font-black my-4 text-xl text-white">Revisar Hoje</Text>
                    <Text className="mb-4 text-white text-base">Você tem 1 revisão marcada para hoje!</Text>
                </View>
                <View>
                    <View className="bg-black rounded-3xl h-[180px] w-[136px]"></View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home