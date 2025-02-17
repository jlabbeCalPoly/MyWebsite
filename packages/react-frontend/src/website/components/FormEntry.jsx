import React, {useState} from "react";
import "./FormEntry.css";

function FormEntry(props) {
    function onValueChanged(event) {
        props.onValueChanged(event)

    }

    return (
        <div className="form-container">
            <p className="form-header">{props.header}</p>
                <input className="form-text-box"
                    type="text"
                    name={props.id}
                    id={props.id}
                    value={props.data}
                    onChange={onValueChanged}
                />
        </div>
    );
}

export default FormEntry