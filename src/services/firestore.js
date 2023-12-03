import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import uuid from "react-native-uuid";

const deckRef = async (deckID) => {
  const ref = firestore().collection("decks").doc(deckID);
  return ref;
};

const snapshot = async (ref) => {
  const snp = await ref.get();
  return snp;
};

//Decks CRUD
const createDeck = async (name, generatedID, visibility, type) => {
  await firestore()
    .collection("decks")
    .doc(generatedID)
    .set({
      id: generatedID,
      uid: auth().currentUser.uid,
      name: name,
      visibility: visibility,
      type: type,
      createdBy: auth().currentUser.displayName,
      createdAt: Date.now(),
      cards: [],
    })
    .then(() => {
      console.log("Deck added!");
      return generatedID;
    });
};

const readDecks = async () => await firestore().collection("decks").get();

const updateDeck = async (name, deckId, visibility, type) => {
  await firestore()
    .collection("decks")
    .doc(deckId)
    .update({
      id: deckId,
      name: name,
      visibility: visibility,
      type: type,
    })
    .then(() => {
      console.log("Deck edited!");
      return deckId;
    });
};

const deleteDeck = async (id, uid) => {
  if (uid != auth().currentUser.uid) return;
  await firestore()
    .collection("decks")
    .doc(id)
    .delete()
    .then(() => {
      console.log("removeUserDeck!");
    });
};

const importDeck = async (
  name,
  generatedID,
  visibility,
  type,
  createdBy,
  cards
) => {
  await firestore()
    .collection("decks")
    .doc(generatedID)
    .set({
      id: generatedID,
      uid: auth().currentUser.uid,
      name: name,
      visibility: visibility,
      type: type,
      createdBy: createdBy,
      createdAt: Date.now(),
      cards: cards,
    })
    .then(() => {
      console.log("Deck imported!");
      return generatedID;
    });
};

//Cards CRUD
const createCard = async (question, answer, type, deckID) => {
  await firestore()
    .collection("decks")
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
        lastReviewed: null,
        nextReview: null,
        difficulty: null,
        difficultyStreak: 0,
      }),
    })
    .then(() => {
      console.log("Card added!");
    });
};

const updateCard = async (
  question,
  answer,
  type,
  cardID,
  deckID,
  index,
  uid,
  createdAt,
  lastReviewed,
  nextReview,
  difficulty,
  difficultyStreak = 0
) => {
  const ref = firestore().collection("decks").doc(deckID);
  const snapshot = await ref.get();

  const cardsArray = snapshot.get("cards");

  const updatedCard = {
    content: {
      question: question,
      answer: answer,
    },
    id: cardID,
    uid: uid,
    type: type,
    createdAt: createdAt,
    lastReviewed: lastReviewed,
    nextReview: nextReview,
    difficulty: difficulty,
    difficultyStreak: difficultyStreak,
  };

  cardsArray[index] = updatedCard;

  ref
    .update({ cards: cardsArray })
    .then(() => {
      console.log("Card edited!");
    })
    .catch((e) => {
      console.log(e + "erro");
    });
};

const updateCardsGroup = async (deckID, newCards) => {
  const ref = firestore().collection("decks").doc(deckID);
  console.log(newCards);

  ref
    .update({ cards: newCards })
    .then(() => {
      console.log("Card edited!");
    })
    .catch((e) => {
      console.log(e + "erro");
    });
};

const deleteCard = async (deckID, index) => {
  const ref = firestore().collection("decks").doc(deckID);
  const snapshot = await ref.get();

  const cardsArray = snapshot.get("cards");

  cardsArray.splice(index, 1);

  ref.update({ cards: cardsArray }).then(() => {
    console.log("Card deleted!");
  });
};

export {
  createDeck,
  readDecks,
  updateDeck,
  deleteDeck,
  importDeck,
  createCard,
  updateCard,
  updateCardsGroup,
  deleteCard,
};
