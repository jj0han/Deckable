export const spacedRepetition = difficulty => {
  const timestamp = Date.now();

  let msInterval;

  if (difficulty === 'easy') {
    // Somar de 2 a 6 semanas (14 a 42 dias)
    const minDias = 14;
    const maxDias = 42;
    msInterval = (Math.random() * (maxDias - minDias) + minDias) * 86400000;
  } else if (difficulty === 'hard') {
    // Somar de 1 a 5 dias
    const minDias = 1;
    const maxDias = 5;
    msInterval = (Math.random() * (maxDias - minDias) + minDias) * 86400000;
  }

  // Adicione o intervalo de tempo calculado ao timestamp atual
  const newTimestamp = timestamp + msInterval;

  // Retorne o novo timestamp
  return newTimestamp;
};
