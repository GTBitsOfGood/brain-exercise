import * as React from "react"
import Svg, { Path } from "react-native-svg"

const QuestionMarkCircleIcon = ({ color, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        {...props}
    >
        <Path
            fill={color}
            d="M13.153 22.265c-5.584 0-10.111-4.527-10.111-10.112 0-5.584 4.527-10.111 10.111-10.111 5.585 0 10.112 4.527 10.112 10.111 0 5.585-4.527 10.112-10.112 10.112Zm0-2.023a8.09 8.09 0 1 0 0-16.178 8.09 8.09 0 0 0 0 16.178Zm-1.011-5.055h2.022v2.022h-2.022v-2.022Zm2.022-1.664v.652h-2.022V12.66a1.011 1.011 0 0 1 1.011-1.011 1.517 1.517 0 1 0-1.487-1.814l-1.984-.398a3.54 3.54 0 1 1 4.482 4.087Z"
        />
    </Svg>
)
export default QuestionMarkCircleIcon
