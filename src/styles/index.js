// Global style variables, such as brand colors and common font sizes go here
// Styles can change whether or not the project is dark mode or light mode

import { PixelRatio } from "react-native";
import AsyncStorage from "@react-native-community/async-storage"

const scaleFont = (originalSize) => {
  const size =
    // eslint-disable-next-line radix
    parseInt(AsyncStorage.getItem("fontSize")) * originalSize || originalSize;
  return Math.round(PixelRatio.roundToNearestPixel(size));
};

const textStyles = {
  small: scaleFont(16), // arbitrarily small font
  medium: scaleFont(24), // arbitrarily medium font
  large: scaleFont(40), // arbitrarily large font
};

// Also font size
function getStyles(isDark, fontSize) {
  return {
    backgroundColor: isDark ? "white" : "black",
    fontSize: textStyles[fontSize],
  };
}

export default getStyles;
