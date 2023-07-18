export const getDeckVisibility = (visibility, deckVisibility) => {
    const updatedDeckVisibility = []
    const updatedDeckVisibilityPlaceholder = []
  
    if (visibility) {
      deckVisibility.forEach((deck, index) => {
        if (deck.value === visibility) {
          updatedDeckVisibilityPlaceholder.push(deckVisibility[index])
          deckVisibility.splice(index, 1)
          updatedDeckVisibility.push(deckVisibility)
          return { updatedDeckVisibilityPlaceholder, updatedDeckVisibility }
        }
      })
    }
  
    updatedDeckVisibilityPlaceholder.push(deckVisibility[0])
    updatedDeckVisibility.push(deckVisibility[1])
    return { updatedDeckVisibilityPlaceholder, updatedDeckVisibility }
  }