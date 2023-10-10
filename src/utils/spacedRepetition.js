export const spacedRepetition = (difficulty, prevDifficulty) => {
  // Verifique se a dificuldade é válida
  if (difficulty !== 'easy' && difficulty !== 'hard') {
    throw new Error('Dificuldade inválida. Deve ser "easy" ou "hard".');
  }

  const timestamp = Date.now();
  let timeIntervalInMilliseconds;

  if (difficulty === 'easy') {
    let minDias = 4;
    let maxDias = 13;
    if (prevDifficulty === 'easy') {
      // Intervalo de 14 a 42 dias
      minDias = 14;
      maxDias = 42;
    }
    timeIntervalInMilliseconds =
      (Math.random() * (maxDias - minDias) + minDias) * 86400000;
  } else if (difficulty === 'hard') {
    // Intervalo de 1 a 5 dias
    const minDias = 0;
    const maxDias = 2;
    if (prevDifficulty === 'easy') {
      // Intervalo de 14 a 42 dias
      minDias = 2;
      maxDias = 4;
    }
    timeIntervalInMilliseconds =
      (Math.random() * (maxDias - minDias) + minDias) * 86400000;
  }

  // Adicione o intervalo de tempo calculado ao timestamp atual
  const newTimestamp = timestamp + timeIntervalInMilliseconds;

  // Retorne o novo timestamp
  return newTimestamp;
};
