import React from "react";
import "./Bar.css";

/* 3 types of bars: 2 horizontal bars and one vertical bar */
const STYLES = ["bar--center", "bar--left"];

const Bar = ({
    barStyle
}) => {
    const checkBarStyle = STYLES.includes(barStyle) ? barStyle : STYLES[0];

    return (
        <div className={`bar ${checkBarStyle}`}></div>
    );
}

export default Bar;