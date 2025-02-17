import React from "react";
import PageDescription from "../PageDescription.jsx";
import Form from "../Form.jsx";
import "./Contact.css";

function Contact() {
  function postForm(formData) {
    const promise = fetch("https://backend-wine-psi.vercel.app/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return promise;
  }

  function submitForm(formData) {
    console.log("submitted");
    postForm(formData).then((res) => {
      if (res.status === 204) {
        console.log("HOLY SHIT IT FUCKING WORKED");
      } else {
        console.log("WOMP WOMP BITCH");
      }
    });
  }

  return (
    <>
      <PageDescription
        page="CONTACT"
        description="EMAIL ME AT JLABBE@CALPOLY.EDU OR FILL OUT THE FORM BELOW TO GET IN CONTACT!"
      />
      <Form submitForm={submitForm} />
    </>
  );
}

export default Contact;
