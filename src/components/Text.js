import React from "react";
import { Text as BaseText } from "react-native";
import PropTypes from 'prop-types';
import useFontSize from "../scripts/useFontSize";

const Text = (props) => {
    const fontSize = props.style && props.style.fontSize ? useFontSize(props.style.fontSize) : useFontSize(12);;
    return (
    <BaseText style={[props.style, {fontSize}]}>
        {props.children}
    </BaseText>
)};

Text.propTypes = {
    children: PropTypes.string,
    style: PropTypes.object,
};

export default Text;
