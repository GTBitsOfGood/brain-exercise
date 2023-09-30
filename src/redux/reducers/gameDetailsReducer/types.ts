interface GameDetails {
  streak: number;
  math: {
    difficultyScore: number;
  };
  completed: {
    math: boolean;
    reading: boolean;
    trivia: boolean;
  };
}

export { GameDetails };
