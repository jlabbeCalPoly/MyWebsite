import React from "react";
import "./PageDescription.css";

function PageDescription(props) {
    return (
        <>
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
