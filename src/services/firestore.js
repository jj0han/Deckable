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
                createdBy: auth().currentUser.displayName,
                createdAt: Date.now(),
                cards: [],
            }
        )
        .then(() => {
            console.log('Deck added!')
            return generatedID
        })
}

const editDeck = async (name, deckId, visibility, type) => {
    await firestore()
        .collection('decks')
        .doc(deckId)
        .update(
            {
                id: deckId,
                name: name,
                visibility: visibility,
                type: type,
            }
        )
        .then(() => {
            console.log('Deck edited!')
            return deckId
        })
}

const addCard = async (question, answer, type, deckID) => {
    await firestore()
        .collection('decks')
        .doc(deckID)
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

const editCard = async (question, answer, type, cardID, deckID, index, uid, createdAt) => {
    const ref = firestore().collection('decks').doc(deckID)
    const snapshot = await ref.get()

    const cardsArray = snapshot.get('cards')

    const updatedCard = {
        content: {
            question: question,
            answer: answer,
        },
        id: cardID,
        uid: uid,
        type: type,
        createdAt: createdAt,
    }

    cardsArray[index] = updatedCard

    ref.update({cards: cardsArray})
    .then(() => {
        console.log('Card edited!')
    })
}

const deleteCard = async (deckID, index) => {
    const ref = firestore().collection('decks').doc(deckID)
    const snapshot = await ref.get()

    const cardsArray = snapshot.get('cards')

    console.log(cardsArray)
    cardsArray[index]

    // ref.update({cards: cardsArray})
    // .then(() => {
    //     console.log('Card edited!')
    // })
}

const removeUserDeck = async (id, uid) => {
    if (uid != auth().currentUser.uid) return
    await firestore()
        .collection('decks')
        .doc(id)
        .delete()
        .then(() => {
            console.log('removeUserDeck!')
        })
}

export { addCard, editCard, deleteCard, editDeck, addUserDeck, readUserData, removeUserDeck }
