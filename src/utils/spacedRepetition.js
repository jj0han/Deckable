export const spacedRepetition = (difficulty, prevDifficulty, streak = 0) => {
  // Verifique se a dificuldade é válida
  if (difficulty !== "easy" && difficulty !== "hard") {
    console.log('Dificuldade inválida. Deve ser "easy" ou "hard".');
  }

  // Defina os intervalos de tempo base para "easy" e "hard" em dias
  let minInterval, maxInterval;

  if (difficulty === "easy") {
    minInterval = 1; // Intervalo base mínimo para "easy"
    maxInterval = 7; // Intervalo base máximo para "easy"
  } else if (difficulty === "hard") {
    minInterval = 0; // Intervalo base mínimo para "hard"
    maxInterval = 3; // Intervalo base máximo para "hard"
  }

  // Ajuste o intervalo base com base no streak
  if (difficulty === "hard" && streak <= maxInterval) {
    minInterval = minInterval;
    maxInterval = maxInterval - streak;
  } else {
    minInterval = minInterval + streak;
    maxInterval = maxInterval + streak;
  }

  // Ajuste o intervalo com base na dificuldade anterior
  if (prevDifficulty === "easy" && difficulty === "hard") {
    minInterval += 2; // Aumenta o intervalo se a dificuldade anterior foi "easy"
    maxInterval += 2;
  }

  // Gere um intervalo aleatório dentro dos limites ajustados
  const timeIntervalInMilliseconds =
    (Math.random() * (maxInterval - minInterval) + minInterval) * 86400000;

  // Adicione o intervalo de tempo calculado ao timestamp atual
  const timestamp = Date.now();
  const newTimestamp = timestamp + timeIntervalInMilliseconds;

  // Retorne o novo timestamp
  return newTimestamp;
};
