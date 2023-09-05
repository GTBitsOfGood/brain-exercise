import { ScreenDescription } from "../../types";
import GameStacks from "./GameStacks";
import Stack from "./StackNavigator";
import generalDescriptions from "./generalDescriptions";
import settingDescriptions from "./settingDescriptions";

const generateStacks = (descriptions: ScreenDescription[]) =>
  descriptions.map(({ name, component, title, options }) => (
    <Stack.Screen
      key={name}
      name={name}
      component={component}
      options={{
        title,
        ...options,
      }}
    />
  ));

const MergedStacks = [
  ...generateStacks(generalDescriptions),
  ...generateStacks(settingDescriptions),
  ...GameStacks
];

export default MergedStacks;
