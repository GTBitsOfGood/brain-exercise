// import * as React from "react"
// import Svg, { Path } from "react-native-svg"

// function VideoIcon(props) {
//   return (
//     <Svg
//       width={37}
//       height={29}
//       viewBox="0 0 37 29"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       {...props}
//     >
//       <Path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M18.167.1c1.539 0 3.117.04 4.647.104l1.808.087 1.73.102 1.62.11 1.479.115a6.843 6.843 0 016.29 6.162l.071.765.135 1.638c.126 1.697.22 3.548.22 5.317 0 1.77-.094 3.62-.22 5.317l-.135 1.638c-.023.263-.047.517-.072.765a6.844 6.844 0 01-6.29 6.162l-1.477.113-1.62.112-1.732.102-1.807.087c-1.548.067-3.098.102-4.647.104-1.55-.002-3.1-.037-4.648-.104l-1.807-.087-1.73-.102-1.62-.112-1.48-.113A6.843 6.843 0 01.593 22.22l-.072-.765-.135-1.638a73.192 73.192 0 01-.22-5.317c0-1.77.094-3.62.22-5.317l.135-1.638c.024-.263.047-.517.072-.765A6.844 6.844 0 016.881.618L8.358.503l1.62-.11L11.71.291l1.807-.087c1.55-.067 3.1-.102 4.65-.104zm-3.6 10.035v8.73c0 .832.9 1.35 1.62.936l7.56-4.365a1.08 1.08 0 000-1.872l-7.56-4.363a1.08 1.08 0 00-1.62.936v-.002z"
//         fill="#9CA5C2"
//       />
//     </Svg>
//   )
// }

// export default VideoIcon;

import React from "react";
import Svg, { Path } from "react-native-svg";

const VideoIcon: React.FC<{ width?: number; height?: number }> = ({
  width = 37,
  height = 29,
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 37 29"
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.167.1c1.539 0 3.117.04 4.647.104l1.808.087 1.73.102 1.62.11 1.479.115a6.843 6.843 0 016.29 6.162l.071.765.135 1.638c.126 1.697.22 3.548.22 5.317 0 1.77-.094 3.62-.22 5.317l-.135 1.638c-.023.263-.047.517-.072.765a6.844 6.844 0 01-6.29 6.162l-1.477.113-1.62.112-1.732.102-1.807.087c-1.548.067-3.098.102-4.647.104-1.55-.002-3.1-.037-4.648-.104l-1.807-.087-1.73-.102-1.62-.112-1.48-.113A6.843 6.843 0 01.593 22.22l-.072-.765-.135-1.638a73.192 73.192 0 01-.22-5.317c0-1.77.094-3.62.22-5.317l.135-1.638c.024-.263.047-.517.072-.765A6.844 6.844 0 016.881.618L8.358.503l1.62-.11L11.71.291l1.807-.087c1.55-.067 3.1-.102 4.65-.104zm-3.6 10.035v8.73c0 .832.9 1.35 1.62.936l7.56-4.365a1.08 1.08 0 000-1.872l-7.56-4.363a1.08 1.08 0 00-1.62.936v-.002z"
      fill="#9CA5C2"
    />
  </Svg>
);

export default VideoIcon;
