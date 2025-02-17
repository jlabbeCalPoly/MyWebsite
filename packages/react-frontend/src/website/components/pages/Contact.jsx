import React from "react";
import PageDescription from "../PageDescription.jsx";
import Form from "../Form.jsx";
import "./Contact.css";

function Contact() {
    function submitForm(formData) {
        const promise = fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
          return promise;
    }

    return (
        <>
        <PageDescription
            page="CONTACT"
            description="EMAIL ME AT JLABBE@CALPOLY.EDU OR FILL OUT THE FORM BELOW TO GET IN CONTACT!"
        />
        <Form submitForm={submitForm}/>
        </>
    );
}

export default Contact;