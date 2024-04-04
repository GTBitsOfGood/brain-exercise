import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const OneSixthPieChartIcon = ({ color, ...props }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill={color}
        d="M10.685.763a9.037 9.037 0 1 0 0 18.075 9.037 9.037 0 0 0 0-18.075Zm0 16.192a7.154 7.154 0 1 1 0-14.31v7.156l6.394-3.197c.5.991.76 2.086.76 3.197a7.156 7.156 0 0 1-7.154 7.154Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.205.042h20.92v20.92H.205z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default OneSixthPieChartIcon
