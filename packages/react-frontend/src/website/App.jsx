import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Contact from "./components/pages/Contact.jsx";
import Projects from "./components/pages/Projects.jsx";
import "./App.css";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
            </Routes>
        </>
    );
}

export default App;
