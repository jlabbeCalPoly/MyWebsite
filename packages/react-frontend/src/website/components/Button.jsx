import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const STYLES = ["btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const Button = ({
    text,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}>
            {text}
        </button>
    )
};

export default Button;