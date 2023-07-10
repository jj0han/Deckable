import { View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import Swiper from 'react-native-deck-swiper'
import LinearGradient from 'react-native-linear-gradient'
import FlipCard from 'react-native-flip-card';
import { DARK_BLUE, PINK, PURPLE } from '../../constants/colors/gradientColors';
import { FeedbackEasy, FeedbackHard } from '../../assets/images/svgs';
import ProgressBar from 'react-native-progress/Bar'

const Swipe = ({ route, navigation }) => {

    const { name, id, uid, createdBy, createdAt, cards } = route.params ?? {}
    const [swipedCards, setSwipedCards] = useState(0)
    const [swipedAll, setSwipedAll] = useState(false)

    return (
        <>
            <View className="w-4/5 h-4 mx-auto z-20">
                <ProgressBar
                    progress={swipedCards / cards.length}
                    borderRadius={100}
                    width={null}
                    height={15}
                    borderWidth={0}
                    color={"#BFD24F"}
                    unfilledColor={"rgb(156 163 175)"}
                />
            </View>
            <Swiper
                backgroundColor='#292929'
                // animateCardOpacity={true}
                animateOverlayLabelsOpacity={true}
                verticalSwipe={false}
                cardIndex={0}
                stackSize={cards.length < 5 ? cards.length : 5}
                cards={cards}
                onSwiped={(cardIndex) => {
                    setSwipedCards(cardIndex + 1)
                }}
                onSwipedAll={() => {
                    setTimeout(() => {
                        navigation.goBack()
                    }, 1500)
                    setSwipedAll(true)
                }}
                renderCard={card => {
                    return (
                        <FlipCard
                            friction={40}
                            perspective={1000}
                            flipHorizontal={true}
                            flipVertical={false}
                            clickable={card.type == "QA" ? true : false}
                            className="justify-center items-center self-center content-center"
                        >
                            {/* Front Face */}
                            <View className="relative w-[255px] h-[330px] mx-auto my-1">
                                <LinearGradient
                                    colors={[DARK_BLUE, PURPLE, PINK]}
                                    className="w-full h-full rounded-3xl border-[3px]"
                                    style={{ borderColor: '#292929' }}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 0.85, y: 0.85 }}
                                />
                                <View className="absolute w-full h-full p-4 justify-between items-center">
                                    <Text style={{ fontSize: card.content.question.length <= 20 ? 40 : 15 }} className="text-white font-bold text-center break-words m-auto">{card.content.question}</Text>
                                </View>
                            </View>
                            {/* Back Face */}
                            <View className="relative w-[255px] h-[330px] mx-auto my-1">
                                <LinearGradient
                                    colors={[DARK_BLUE, PURPLE, PINK]}
                                    className="w-full h-full rounded-3xl border-[3px]"
                                    style={{ borderColor: '#292929' }}
                                    start={{ x: 0.85, y: 0 }}
                                    end={{ x: 0, y: 0.85 }}
                                />
                                <View className="absolute w-full h-full p-4 justify-between items-center">
                                    <Text style={{ fontSize: card.content.answer.length <= 20 ? 40 : 15 }} className="text-white font-bold text-center break-words m-auto">{card.content.answer}</Text>
                                </View>
                            </View>
                        </FlipCard>
                    );
                }}
                overlayLabelStyle={{
                    fontSize: 45,
                    fontWeight: 'bold',
                    borderRadius: 10,
                    padding: 10,
                    overflow: 'hidden',
                }}
                overlayLabelWrapperStyle={{
                    position: 'absolute',
                    backgroundColor: 'transparent',
                    zIndex: 2,
                    flex: 1,
                    width: '100%',
                    height: '100%',
                }}
                overlayLabels={{
                    left: {
                        element: (
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}>
                                <FeedbackHard />
                                <Text className="font-bold">DIFÍCIL</Text>
                            </View>
                        ) /* Optional */,
                        title: 'NOPE',
                        style: {
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-start',
                                marginTop: 0,
                                marginLeft: "-7%",
                            },
                        },
                    },
                    right: {
                        element: (
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}>
                                <FeedbackEasy />
                                <Text className="font-bold">FÁCIL</Text>
                            </View>
                        ) /* Optional */,
                        title: 'LIKE',
                        style: {
                            wrapper: {
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                justifyContent: 'flex-start',
                                marginTop: 0,
                                marginLeft: "7%",
                            },
                        },
                    },
                }}
            />
        </>
    )
}

export default Swipe