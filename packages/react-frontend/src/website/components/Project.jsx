import React from "react";
import Button from "./Button.jsx";

function ProjectEntry(props) {
    /* Project header includes the icon to the left, with the 
       name and date centered vertically to the right of it 

       Project details includes the blue bar to the left (whose length is determined by the height of bullets and button), 
       with the bullet points and button centered next to it

       */
    return (
        <> 
            <div className="project-header">
                <img className="project-icon" src={props.icon}/>
                <div className="project-header-text">
                    <h2 className="project-name">{props.name}</h2>
                    <h2 className="project-date">{props.date}</h2>
                </div>
            </div>
            <div className="project-details">
                <div className="project-blue-bar"></div>
                <div className="project-description">
                    <ul className="project-bullets">
                        {props.bullets.map ((bullet) => {
                            <li className="project-bullet-item">
                                <p className="project-bullet-text">{bullet}</p>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Project;