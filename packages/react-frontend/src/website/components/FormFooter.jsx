import React, { useState, useEffect } from "react";
import AdditionalLinks from "./AdditionalLinks.jsx"
import Button from "./Button.jsx";
import "./FormFooter.css";

function FormFooter(props) {
    const [formFooterFormat, setFormat] = useState();

    function updateFormat() {
        if(window.innerWidth <= 500) {
            setFormat(false);
        } else {
            setFormat(true);
        }
    }

     /* update the format using the window size */
     useEffect(() => {
        updateFormat();
    }, [])

    window.addEventListener('resize', updateFormat);

    return (
        <div className="form-footer">
            <div className={formFooterFormat ? "form-footer-flex" : "form-footer-box"}>
                <AdditionalLinks/>
                <Button buttonStyle="btn--outline" buttonSize="btn--medium" text="SUBMIT FORM" onClick={props.validateSubmit}/>
            </div>
        </div>
    )
}

export default FormFooter;