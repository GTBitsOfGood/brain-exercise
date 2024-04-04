import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const TwoThirdsPieChartIcon = ({ color, ...props }) => (
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
          fillRule="evenodd"
          d="M4.295 3.41a9.037 9.037 0 1 1 12.78 12.78A9.037 9.037 0 0 1 4.296 3.41Zm-.22 9.128c.36.868.887 1.657 1.551 2.321l5.06-5.058V2.645a7.155 7.155 0 0 0-6.61 9.893Z"
          clipRule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.205.042h20.92v20.92H.205z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
export default TwoThirdsPieChartIcon
