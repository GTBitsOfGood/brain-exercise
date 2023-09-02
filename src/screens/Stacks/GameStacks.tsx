import { FC } from "react";

import MathMain from "../Game/MathMain/MathMain";
import ReadingMain from "../Game/ReadingMain";
import TriviaScreen from "../Game/TriviaScreen";
import PromptScreen from "../Game/PromptScreen";

import IntroOverlay from "../../components/OverLays/IntroOverlay";
import PauseButton from "../../components/PauseButton";
import { GameTypes } from "../../types";
import Stack from "./StackNavigator";
import gameDescriptions from "./gameDescriptions";

export const gameComponents: Record<GameTypes, FC> = {
  Math: MathMain,
  Reading: ReadingMain,
  Trivia: TriviaScreen,
  Writing: PromptScreen,
};

const GameStacks = [];

Object.keys(GameTypes).forEach((game: GameTypes) => {
  const gameDescription = gameDescriptions[game];
  GameStacks.push(
    <Stack.Screen
      key={gameDescription.intro.name}
      name={gameDescription.intro.name}
      options={{
        title: gameDescription.title,
        headerBackVisible: true,
      }}
    >
      {() => <IntroOverlay
        sound={gameDescription.intro.sound}
        image={gameDescription.intro.image}
        description={gameDescription.intro.description}
        time={gameDescription.minutes}
        buttonTitle={gameDescription.intro.buttonTitle}
        subDescription={gameDescription.intro.subDescription}
        navigationArgs={gameDescription.intro.nextScreenNavigationArgs}
      />}
    </Stack.Screen>,
  );
  GameStacks.push(
    <Stack.Screen
      key={gameDescription.game.name}
      name={gameDescription.game.name}
      component={gameComponents[game]}
      options={{
        title: gameDescription.title,
        headerBackVisible: false,
        headerRight: () => <PauseButton />,
      }}
      initialParams={{
        nextScreen: gameDescription.game.nextScreenNavigationArgs[0],
      }}
    />,
  );
});

export default GameStacks;
