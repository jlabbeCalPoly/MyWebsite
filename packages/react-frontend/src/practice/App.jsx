import React from "react";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Home from "./components/pages/Home.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </>
    );
}

export default App;
