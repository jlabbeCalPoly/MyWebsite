import React from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import GithubIcon from "../assets/github.svg";
import "./AdditionalLinks.css";

function AdditionalLinks() {
    return (
        <div className="additional-links">
            <p className="additional-links-header">ADDITIONAL LINKS</p>
            <ul className="additional-links-rows">
                <li className="additional-links-entry">
                    <img className="additional-links-icon" src={LinkedInIcon}></img>
                    <a className="additional-links-link" target="_blank" href="https://www.linkedin.com/in/julian-labbe-862626330">MY LINKEDIN</a>
                </li>
                <li className="additional-links-entry">
                    <img className="additional-links-icon" src={GithubIcon}></img>
                    <a className="additional-links-link" target="_blank" href="https://github.com/jlabbeCalPoly">MY GITHUB</a>
                </li>
            </ul>
        </div>
    );
}

export default AdditionalLinks;