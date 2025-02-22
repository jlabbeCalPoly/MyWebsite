import React from "react";
import Bar from "./Bar.jsx";
import "./PageDescription.css";

function PageDescription(props) {
    return (
        <>
        <Bar />
        <h1 className="header">
            {props.page}
        </h1>
        <p className="description">
            {props.description}
        </p>
        </>
    )
}

export default PageDescription;
