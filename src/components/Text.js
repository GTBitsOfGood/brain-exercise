import React from "react";
import { Text as BaseText } from "react-native";
import PropTypes from 'prop-types';
import useFontSize from "../scripts/useFontSize";

const Text = (props) => {
    const fontSize = useFontSize(props.style.fontSize);
    return (
    <BaseText style={[props.style, {
        fontSize
    }]}>
        {props.children}
    </BaseText>
)};

Text.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default Text;

// import line for all screens that have scalable text components is below...
// ...(make sure to remove react-native Text imports and replace them with the following):

// import Text from ‘./components/Text’;
