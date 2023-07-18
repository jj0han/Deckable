export const getDeckType = (type, deckTypes) => {
    const updatedDeckTypes = []
    const updatedDeckPlaceholder = []
  
    if (type) {
      deckTypes.forEach((deck, index) => {
        if (deck.value === type) {
          updatedDeckPlaceholder.push(deckTypes[index])
          deckTypes.splice(index, 1)
          updatedDeckTypes.push(deckTypes)
          return { updatedDeckPlaceholder, updatedDeckTypes }
        }
      })
    }
  
    updatedDeckPlaceholder.push(deckTypes[0])
    deckTypes.splice(0, 1)
    updatedDeckTypes.push(deckTypes)
    return { updatedDeckPlaceholder, updatedDeckTypes }
  }