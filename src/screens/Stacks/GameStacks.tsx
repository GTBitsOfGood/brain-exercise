import MathMain from "../Game/MathMain/MathMain";
import ReadingMain from "../Game/ReadingMain/ReadingMain";
import TriviaMain from "../Game/TriviaMain/TriviaMain";
import IntroOverlay from "../../components/OverLays/IntroOverlay";
// import PauseButton from "../../components/PauseButton";
import { GameTypes } from "../../types";
import Stack from "./StackNavigator";
import gameDescriptions from "./gameDescriptions";
import WritingMain from "../Game/WritingMain/WritingMain";

export const gameComponents: Record<GameTypes, React.FC> = {
  Math: MathMain,
  Reading: ReadingMain,
  Trivia: TriviaMain,
  Writing: WritingMain,
};

const GameStacks: React.JSX.Element[] = [];

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
      {({ route }) => (
        <IntroOverlay
          sound={gameDescription.intro.sound}
          image={gameDescription.intro.image}
          description={gameDescription.intro.description}
          time={gameDescription.minutes}
          buttonTitle={gameDescription.intro.buttonTitle}
          subDescription={gameDescription.intro.subDescription}
          navigationArgs={
            route.params && "nextScreenArgs" in route.params
              ? route.params.nextScreenArgs
              : gameDescription.intro.nextScreenArgs
          }
        />
      )}
    </Stack.Screen>,
  );
  GameStacks.push(
    <Stack.Screen
      key={gameDescription.game.name}
      name={gameDescription.game.name}
      component={gameComponents[game]}
      options={{
        // title: gameDescription.title,
        // headerBackVisible: false,
        // headerRight: () => <PauseButton />,
        headerShown: false,
      }}
      initialParams={{
        nextScreenArgs: gameDescription.game.nextScreenArgs,
      }}
    />,
  );
});

export default GameStacks;
