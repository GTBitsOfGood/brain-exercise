import React from "react";
import { StyleSheet } from "react-native";
import { Button as BaseButton } from "react-native-elements";
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
    <BaseButton buttonStyle={StyleSheet.create({borderRadius: 10, marginTop: 20, height: 45, alignSelf: "center"})}>
        {props.children}
    </BaseButton>
)};

Button.propTypes = {
    children: PropTypes.string,
    buttonStyle: PropTypes.object,
};

export default Button;
