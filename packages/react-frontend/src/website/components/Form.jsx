import React, { useState, useEffect } from "react";
import FormEntry from "./FormEntry.jsx";
import FormFooter from "./FormFooter.jsx";

function Form(props) {
    const [formData, setData] = useState(() => {
        const prevData = localStorage.getItem("formData");
        return prevData ? JSON.parse(prevData) : 
            {
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
            }
        }
    );

    function handleChange(event) {
        const {id, value} = event.target;
        console.log(id);
        /* update the specific key */
        setData((data) => ({...data, [id]: value}));
    }

    /* validate the data in formData, submit if conditions pass */
    function submitForm() {
        if(formData["name"].length > 0 && formData["email"].length > 0 && formData["message"].length > 0) {
            props.submitForm(formData);
            setData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        }
    }

    /* include formData object in [], meaning this will
       run every time formData is updated */
    useEffect(() => {
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData])

    return (
        <>
            <FormEntry
                header="YOUR NAME*"
                id="name"
                data={formData.name}
                onValueChanged={handleChange}
            />
            <FormEntry
                header="YOUR EMAIL*"
                id="email"
                data={formData.email}
                onValueChanged={handleChange}
            />
            <FormEntry
                header="PHONE"
                id="phone"
                data={formData.phone}
                onValueChanged={handleChange}
            />
            <FormEntry
                header="SUBJECT"
                id="subject"
                data={formData.subject}
                onValueChanged={handleChange}
            />
            <FormEntry
                header="MESSAGE*"
                id="message"
                data={formData.message}
                onValueChanged={handleChange}
            />
            <FormFooter 
                validateSubmit={submitForm}/>
        </>
    );
}

export default Form;
