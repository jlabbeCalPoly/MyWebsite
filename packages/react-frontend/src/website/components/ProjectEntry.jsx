import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import "./ProjectEntry.css";

function ProjectEntry(props) {
    const [iconHeight, setIconHeight] = useState(0);
    const [barHeight, setBarHeight] = useState(0);

    function learnMore() {
        <Link to={`/projects/${props.projectId}`}></Link>
    }

    /* */
    function setHeights() {
        const header = document.querySelector(`.${props.projectId}-text`);
        if(header != undefined) {
            let height = header.offsetHeight;
            if((height%2)!=0) {
                height -= 1
            }
            setIconHeight(height);
        }

        const details = document.querySelector(`.${props.projectId}-desc`)
        if(details != undefined) {
            setBarHeight(details.offsetHeight);
        }
    }

    useEffect(() => {
        setHeights();
    }, [])

    window.addEventListener("resize", setHeights);

    /* Project header includes the icon to the left, with the 
       name and date centered vertically to the right of it 

       Project details includes the blue bar to the left (whose length is determined by the height of bullets and button), 
       with the bullet points and button centered next to it
       */
    return (
        <> 
            <div className="project-header">
                <img className="project-icon" src={props.projectIcon} style={{height: `${iconHeight}px`}}/>
                <div className={`project-header-text ${props.projectId}-text`}>
                    <h2 className="project-name">{props.projectName}</h2>
                    <h2 className="project-date">{props.projectDate}</h2>
                </div>
            </div>
            <div className="project-details">
                <div className="project-blue-bar" style={{height: `${barHeight}px`, marginInline: `${(iconHeight-2)/2}px`}}/>
                <div className={`project-description ${props.projectId}-desc`}>
                    {props.projectBullets?.map ((bullet, index) => {
                        return (
                            <li className="project-bullet-item" key={index}>
                                <div className="project-bullet-icon"></div>
                                <p className="project-bullet-text">{bullet}</p>
                            </li>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

/* <Button className="learn-more" buttonStyle="btn--outline" buttonSize="btn--medium" text="LEARN MORE" onClick={learnMore}/> */

export default ProjectEntry;