export const spacedRepetition = (
  difficulty,
  prevDifficulty,
  difficultyStreak = 0
) => {
  console.log(difficultyStreak);
  // Verifique se a dificuldade é válida
  if (difficulty !== "easy" && difficulty !== "hard") {
    console.log('Dificuldade inválida. Deve ser "easy" ou "hard".');
    return null; // Ou lance um erro, dependendo do seu fluxo de erro
  }

  // Defina os intervalos de tempo base para "easy" e "hard" em dias
  let minInterval, maxInterval;

  if (difficulty === "easy") {
    minInterval = 1; // Intervalo base mínimo para "easy"
    maxInterval = 5; // Intervalo base máximo para "easy"
  } else {
    // difficulty === "hard"
    minInterval = 0; // Intervalo base mínimo para "hard"
    maxInterval = 3; // Intervalo base máximo para "hard"
  }

  // Ajuste o intervalo base com base no difficultyStreak
  if (difficulty === "hard") {
    maxInterval = Math.max(minInterval, maxInterval - difficultyStreak); // Garante que maxInterval não seja menor que minInterval
  } else {
    minInterval = Math.max(0, minInterval + difficultyStreak); // Garante que minInterval não seja menor que 0
    maxInterval += difficultyStreak;
  }

  // Ajuste o intervalo com base na dificuldade anterior
  if (prevDifficulty === "easy" && difficulty === "hard") {
    minInterval += 2; // Aumenta o intervalo se a dificuldade anterior foi "easy"
    maxInterval += 2;
  }

  // Gere um intervalo aleatório dentro dos limites ajustados
  const timeIntervalInMilliseconds =
    Math.random() * (maxInterval - minInterval) + minInterval;

  // Adicione o intervalo de tempo calculado ao timestamp atual
  const timestamp = Date.now();
  const newTimestamp = timestamp + timeIntervalInMilliseconds * 86400000;

  // Retorne o novo timestamp
  return newTimestamp;
};
