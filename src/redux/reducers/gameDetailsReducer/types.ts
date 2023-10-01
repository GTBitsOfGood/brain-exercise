export enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
interface GameDetails {
  streak: Days[];
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
