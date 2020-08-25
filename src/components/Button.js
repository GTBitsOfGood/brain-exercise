import React from "react";
import { Button as BaseButton } from "react-native-elements";
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
    <BaseButton {...props}
        buttonStyle={{
            alignSelf: "center",
            marginVertical: 10,
            width: 300,
            height: 60, 
            borderRadius: 5,
            backgroundColor: "#005AA3",
    }}>
        {props.children}
    </BaseButton>
)};

Button.propTypes = {
    children: PropTypes.string,
    buttonStyle: PropTypes.object,
};

export default Button;
