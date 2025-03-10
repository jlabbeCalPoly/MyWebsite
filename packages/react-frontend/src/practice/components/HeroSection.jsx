import React from "react";
import Button from "./Button";
import Video from "../../videoAssets/video-2.mp4";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={Video} autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for</p>
            <div className="hero-btns">
                <Button
                    className="btn"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                    >
                        GET STARTED
                </Button>
                <Button
                    className="btn"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    >
                        WATCH TRAILER <i className="far fa-play-circle" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;