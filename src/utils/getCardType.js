export const getCardType = (type, cardType) => {
    const updatedCardType = []
    const updatedCardTypePlaceholder = []
  
    if (type) {
      cardType.forEach((card, index) => {
        if (card.value === type) {
          updatedCardTypePlaceholder.push(cardType[index])
          cardType.splice(index, 1)
          updatedCardType.push(cardType)
          return { updatedCardTypePlaceholder, updatedCardType }
        }
      })
    }
  
    updatedCardTypePlaceholder.push(cardType[0])
    updatedCardType.push(cardType[1])
    return { updatedCardTypePlaceholder, updatedCardType }
  }