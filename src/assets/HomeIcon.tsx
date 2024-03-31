import React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 37,
  height = 37,
}) => (
  <Svg width={width} height={height} viewBox="0 0 37 37" fill="none">
    <Path
      fill="#008AFC"
      d="M36.5 16.977V33.62c0 .764-.316 1.496-.879 2.036a3.065 3.065 0 0 1-2.121.844H26a3.065 3.065 0 0 1-2.121-.844A2.823 2.823 0 0 1 23 33.62v-7.2c0-.383-.158-.75-.44-1.02a1.532 1.532 0 0 0-1.06-.421h-6c-.398 0-.78.152-1.06.422-.282.27-.44.636-.44 1.018v7.2c0 .765-.316 1.497-.879 2.037A3.065 3.065 0 0 1 11 36.5H3.5a3.065 3.065 0 0 1-2.121-.844A2.823 2.823 0 0 1 .5 33.62V16.977c0-.398.086-.793.253-1.158.167-.365.41-.692.716-.962l15-13.588.021-.02A3.07 3.07 0 0 1 18.508.5a3.07 3.07 0 0 1 2.04.77l15 13.587c.302.271.543.6.707.964.164.365.247.759.245 1.156Z"
    />
  </Svg>
);

export default HomeIcon;
// import * as React from "react"
// import Svg, { Path } from "react-native-svg"
// import { View } from 'react-native';

// function HomeIcon(props) {
//   return (
//     <View>

    
//     <Svg
//       width={37}
//       height={37}
//       viewBox="0 0 37 37"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <Path
//         d="M36.5 16.977V33.62c0 .764-.316 1.496-.879 2.036a3.065 3.065 0 01-2.121.844H26a3.065 3.065 0 01-2.121-.844A2.823 2.823 0 0123 33.62v-7.2c0-.383-.158-.75-.44-1.02a1.532 1.532 0 00-1.06-.421h-6c-.398 0-.78.152-1.06.422-.282.27-.44.636-.44 1.018v7.2c0 .765-.316 1.497-.879 2.037A3.065 3.065 0 0111 36.5H3.5a3.065 3.065 0 01-2.121-.844A2.823 2.823 0 01.5 33.62V16.977c0-.398.086-.793.253-1.158.167-.365.41-.692.716-.962l15-13.588.021-.02A3.07 3.07 0 0118.508.5a3.07 3.07 0 012.04.77l15 13.587c.302.271.543.6.707.964.164.365.247.759.245 1.156z"
//         fill="#008AFC"
//       />
//     </Svg>
//     </View>
//   )
// }

// export default HomeIcon