import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Contact from "./components/pages/Contact.jsx";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </>
    );
}

export default App;
