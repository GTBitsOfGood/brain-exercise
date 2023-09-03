import Stack from "./StackNavigator";
import generalDescriptions from "./generalDescriptions";

const GeneralStacks = generalDescriptions.map(({ name, component, title, options }) => (
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

export default GeneralStacks;