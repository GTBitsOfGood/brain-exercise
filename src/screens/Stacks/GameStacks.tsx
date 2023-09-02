import IntroOverlay from "../../components/OverLays/IntroOverlay";
import PauseButton from "../../components/PauseButton";
import { GameTypes } from "../../types";
import Stack from "./StackNavigator";
import gameDescriptions from "./gameDescriptions";

const GameStacks = [];

Object.keys(GameTypes).forEach((game: GameTypes) => {
  const gameDescription = gameDescriptions[game];
  GameStacks.push(
    <Stack.Screen
      key={gameDescription.intro.name}
      name={gameDescription.intro.name}
      component={() => (
        <IntroOverlay
          sound={gameDescription.intro.sound}
          image={gameDescription.intro.image}
          description={gameDescription.intro.description}
          time={gameDescription.minutes}
          buttonTitle={gameDescription.intro.buttonTitle}
          subDescription={gameDescription.intro.subDescription}
          nextScreen={gameDescription.intro.nextScreen}
        />
      )}
      options={{
        title: gameDescription.title,
        headerBackVisible: true,
      }}
    />,
  );
  GameStacks.push(
    <Stack.Screen
      key={gameDescription.game.name}
      name={gameDescription.game.name}
      component={gameDescription.game.component}
      options={{
        title: gameDescription.title,
        headerBackVisible: false,
        headerRight: () => <PauseButton />,
      }}
    />,
  );
});

export default GameStacks;