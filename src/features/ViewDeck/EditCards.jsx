import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FormBackgroundLayout, FormLayout} from '../../layouts/forms';
import useHeaderRight from '../../hooks/useHeaderRight';
import {WHITE} from '../../constants/colors/layoutColors';
import {
  EditCardComponent,
  PickerSelectComponent,
  SearchInput,
} from '../../components';
import {CreateIcon} from '../../assets/images/svgs';
import firestore from '@react-native-firebase/firestore';
import {PURPLE} from '../../constants/colors/gradientColors';
import {handleCardSearch} from '../../utils/handleSearch';

export default function EditCards({route, navigation}) {
  useHeaderRight(navigation, '#FFF');
  const [userCards, setUserCards] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const {id} = route.params ?? {};
  const [pickerType, setPickerType] = useState('NewestDate');
  const items = {
    types: [
      {label: 'Data mais recente', value: 'NewestDate'},
      {label: 'Data mais antiga', value: 'OldestDate'},
    ],
  };
  const [inputValue, setInputValue] = useState('');
  const [filteredCards, setFilteredCards] = useState();

  const handlePress = () => {
    const cards = userCards.cards;
    navigation.navigate('Criar Carta', {
      deckID: id,
      cards,
    });
  };

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('decks')
      .doc(id)
      .onSnapshot(querySnapshot => {
        setLoading(true);
        setUserCards(querySnapshot.data().cards);
        setFilteredCards(querySnapshot.data().cards);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const render = filteredCards?.map((card, index) => {
    // console.log(card)
    // console.log(card.content.question, index)
    return (
      <EditCardComponent
        key={card.id}
        cardID={card.id}
        deckID={id}
        content={card.content}
        card={card}
        index={index}
        navigation={navigation}
        title={card.content ? card.content.question : ''}
        createdAt={card.createdAt}
      />
    );
  });

  return (
    <FormBackgroundLayout>
      <View className="flex-1 h-1/5 ">
        <View className="px-6">
          <SearchInput
            placeholder={'Pesquisar...'}
            dark={true}
            onChange={e =>
              handleCardSearch(e, setInputValue, setFilteredCards, userCards)
            }
            value={inputValue}>
            <TouchableOpacity
              onPress={handlePress}
              className="h-full justify-center items-center px-2">
              <CreateIcon />
            </TouchableOpacity>
          </SearchInput>
        </View>
        <View className="flex-row mx-4 mt-9 items-center justify-between">
          <PickerSelectComponent
            white={true}
            label="Ordenar"
            labelAtTop={false}
            items={items.types}
            setValue={setPickerType}
          />
          <Text className="text-white">{userCards.length} Cartas Visíveis</Text>
        </View>
      </View>
      <FormLayout height={0.75}>
        <View className="flex-1 flex-row flex-wrap justify-center mb-40">
          {loading ? (
            <ActivityIndicator size={50} color={PURPLE} />
          ) : pickerType === 'OldestDate' ? (
            render
          ) : (
            render.reverse()
          )}
        </View>
      </FormLayout>
    </FormBackgroundLayout>
  );
}
