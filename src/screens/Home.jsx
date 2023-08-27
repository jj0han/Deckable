import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import useHeaderRight from '../hooks/useHeaderRight';
import {DeckComponent, SearchInput} from '../components';
import {DARK_GRAY} from '../constants/colors/layoutColors';
import {PURPLE} from '../constants/colors/gradientColors';
import Swiper from 'react-native-deck-swiper';
import {Chevron} from 'react-native-shapes';
import {handleSearch} from '../utils/handleSearch';

const Home = ({navigation}) => {
  const [userDecks, setUserDecks] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const [inputValue, setInputValue] = useState('');
  const [filteredDecks, setFilteredDecks] = useState();

  useHeaderRight(navigation, DARK_GRAY);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('decks')
      .where('uid', '==', auth().currentUser.uid)
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        setLoading(true);
        const decks = [];
        querySnapshot.forEach(doc => {
          decks.push(doc.data());
        });
        setUserDecks(decks);
        setFilteredDecks(decks);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const render = filteredDecks?.map(deck => (
    <DeckComponent
      key={deck.id}
      title={deck.name}
      navigate={navigation.navigate}
      params={deck}
      screen={'Ver Deck'}
    />
  ));

  return (
    <SafeAreaView className="bg-white flex-1 pb-[90px]">
      <ScrollView>
        <View className="px-6">
          <SearchInput
            placeholder={'Pesquisar...'}
            onChange={e =>
              handleSearch(e, setInputValue, setFilteredDecks, userDecks)
            }
            value={inputValue}
          />
        </View>

        {loading ? (
          <ActivityIndicator size={50} color={PURPLE} />
        ) : render.length === 0 ? (
          <>
            <Text className="text-black text-lg font-bold text-center p-6">
              Parece que não tem nenhum Deck aqui...
            </Text>
            <DeckComponent
              title={'Comece criando um novo Deck!'}
              navigate={navigation.navigate}
              screen={'Criar'}
              params={null}
            />
          </>
        ) : (
          <>
            <View className="w-[100%] h-[130px] px-6 overflow-hidden">
              <Swiper
                backgroundColor="#ffffff00"
                animateCardOpacity={true}
                verticalSwipe={false}
                cardIndex={0}
                stackSize={userDecks.length < 3 ? userDecks.length : 3}
                cards={userDecks}
                cardVerticalMargin={0}
                cardHorizontalMargin={0}
                infinite={true}
                containerStyle={{
                  position: 'relative',
                  flex: 1,
                }}
                cardStyle={{
                  width: '100%',
                }}
                renderCard={card => {
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Ver Deck', card);
                      }}
                      activeOpacity={0.95}
                      className="w-full h-[85px] bg-[#292929] rounded-2xl items-center justify-between border-white border-[2px] flex-row">
                      <View className="m-4">
                        <Text className="text-white text-lg font-bold">
                          {card.name}
                        </Text>
                        <Text className="text-white text-xs">
                          Você tem uma revisão marcada para hoje!
                        </Text>
                      </View>
                      <View className="bg-white w-[30px] h-[30px] m-4 rounded-md justify-center">
                        <Chevron
                          size={2}
                          rotate={-90}
                          color="#292929"
                          style={{top: 5, left: 2}}
                        />
                      </View>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <View className="flex-wrap flex-row px-6">{render}</View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
