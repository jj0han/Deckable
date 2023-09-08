export const getDeckType = (type, deckTypes) => {
  const updatedDeckTypes = [];
  const updatedDeckPlaceholder = [];

  if (type) {
    deckTypes.forEach((deck, index) => {
      if (deck.value === type) {
        updatedDeckPlaceholder.push(deckTypes[index]);
        deckTypes.splice(index, 1);
        updatedDeckTypes.push(deckTypes);
        return {updatedDeckPlaceholder, updatedDeckTypes};
      }
    });
  } else {
    if (deckTypes[0] === type) {
      updatedDeckPlaceholder.push(deckTypes[0]);
      updatedDeckTypes.push(deckTypes);
    } else {
      updatedDeckPlaceholder.push(deckTypes[0]);
      deckTypes.splice(0, 1);
      updatedDeckTypes.push(deckTypes);
    }
  }
  return {updatedDeckPlaceholder, updatedDeckTypes};
};
