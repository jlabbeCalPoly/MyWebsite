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
      if (res.status === 201) {
        console.log("yay");
        // display submission success page
      } else {
        console.log(res.status);
        // unsuccessful form submission,
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
