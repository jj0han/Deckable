import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import uuid from 'react-native-uuid'

const readUserData = async () => await firestore().collection('decks').get()

const addUserDeck = async (name, generatedID, visibility, type) => {
    await firestore()
        .collection('decks')
        .doc(generatedID)
        .set(
            {
                id: generatedID,
                uid: auth().currentUser.uid,
                name: name,
                visibility: visibility,
                type: type,
                createdAt: Date.now(),
                cards: [],
            }
        )
        .then(() => {
            console.log('Deck added!')
            return generatedID
        })
}

const addCard = async (question, answer, type, deckID) => {
    await firestore()
        .collection('decks')
        .doc(`${deckID}`)
        .update({
            cards: firestore.FieldValue.arrayUnion({
                content: {
                    question: question,
                    answer: answer,
                },
                id: uuid.v4(),
                uid: auth().currentUser.uid,
                type: type,
                createdAt: Date.now(),
            }),
        })
        .then(() => {
            console.log('Card added!')
        })
}

const removeUserDeck = async (id) => {
    await firestore()
        .collection('decks')
        .doc(id)
        .delete()
        .then(() => {
            console.log('User added!')
        })
}

export { addCard, addUserDeck, readUserData, removeUserDeck }
