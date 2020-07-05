import React, { Component } from "react";
import { View, Text } from "react-native";
import * as Progress from 'react-native-progress';

class ProgressBar extends Component {
    /**
     * Set up
     * @param {*} props contains three props: 
     * seconds: time of problem in seconds
     * red: in seconds when the bar should turn red
     * func: function to be called after the timer completes. call at line 41
     */
    constructor(props) {
        super(props)
        this.state = {
            minutes: Math.floor(this.props.seconds / 60),
            seconds: props.seconds % 60,
            progress: 0,
            red: false,
        }
        this.intervals = []
    }

    /**
     * Starts the timer
     */
    componentDidMount = () => {
        let time = this.props.seconds
        this.intervals.push(setInterval(() => {
            if (time % 60 > 0) {
                this.setState(() => ({
                    seconds: time % 60
                }))
            }
            if (time % 60 === 0) {
                if (Math.floor(time / 60) === 0) {
                    clearInterval(this.intervals.pop)
                    this.setState(() => ({
                        seconds: 0
                    }))
                    // ** Call func here**
                } else {
                    this.setState(() => ({
                        minutes: Math.floor(time / 60) - 1,
                        seconds: 59
                    }))
                }
            }
            time -= 1
            this.setState(() => ({
                progress: 1.0 - time/this.props.seconds
            }))
            if (time < this.props.red) {
                this.setState(() => ({
                    red: true
                }))
            }
        }, 1000))
    }

    /**
     * cancels the interval on unmount
     */
    componentWillUnmount = () => {
        this.intervals.forEach((interval)=> {
            clearInterval(interval)
        })
    }


    render() {
        return (
            <View style = {{justifyContent: "center", alignItems: "center"}}>
            <Text style = {{fontSize: 40}}>{this.state.minutes}:{this.state.seconds.toString().padStart(2, "0")}</Text>
            <Progress.Bar 
                progress={this.state.progress} 
                width={375}
                height={20}
                borderRadius={10}
                color = {this.state.red ? "red":"purple"}
            />
        </View>
        )
    }
}

export default ProgressBar
// functional component version
// const ProgressBar = (props) => {
//     const [minutes, setMinutes] = React.useState(Math.floor(props.seconds / 60))
//     const [seconds, setSeconds] = React.useState(props.seconds % 60)
//     const [progress, setProgress] = React.useState(0)
//     const [red, setRed] = React.useState(false)
//     useEffect(() => startTimer(), [])

//     const startTimer = () => {
//         let time = props.seconds
//         const myInterval = setInterval(() => {
//             if (time % 60 > 0) {
//                 setSeconds(time % 60)
//             }
//             if (time % 60 === 0) {
//                 if (Math.floor(time / 60) === 0) {
//                     clearInterval(myInterval)
//                     setSeconds(0)
//                 } else {
//                     setSeconds(59)
//                     setMinutes(Math.floor(time / 60) - 1)
//                 }
//             }
//             time -= 1
//             setProgress(1.0 - time/props.seconds)
//             if (time < props.red) {
//                 setRed(true)
//             }
//         }, 1000)
//     }

//     return (
//         <View style = {{justifyContent: "center", alignItems: "center"}}>
//             <Text style = {{fontSize: 40}}>{minutes}:{seconds.toString().padStart(2, "0")}</Text>
//             <Progress.Bar 
//                 progress={progress} 
//                 width={375}
//                 height={20}
//                 borderRadius={10}
//                 color = {red ? "red":"purple"}
//             />
//         </View>
//     )
// }

// export default ProgressBar