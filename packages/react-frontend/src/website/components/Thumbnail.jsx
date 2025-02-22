import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigator from "./Navigator.jsx";
import Button from "./Button.jsx";
import GameThumbnail from "../assets/game.png";
import WebThumbnail from "../assets/web.png";
import "./Thumbnail.css";

function Thumbnail() {
    const navigate = useNavigate();

    const thumbnails = [
        {
         thumbnail: GameThumbnail,
         header: "GAME DEVELOPMENT",
         description: "VIEW MY BEHIND-THE-SCENE PROCESS, FROM INITIAL IDEAS TO PUBLISHING THE FINAL PRODUCT!"
        },
        {
         thumbnail: WebThumbnail,
         header: "WEB DEVELOPMENT",
         description: "UNDERSTAND MY PROCESS BEHIND BUILDING THIS WEBSITE AND HOW I MODULARIZED DIFFERENT ASPECTS!"
        },
    ];

    /* store the current index the thumbnails are on */
    const[index, setIndex] = useState(0);
    const[thumbnail, setThumbnail] = useState();
    const[header, setHeader] = useState();
    const[description, setDescription] = useState();

    function updateIndex(direction) {
        if (direction === "left") {
            if (index === 0) {
                setIndex(thumbnails.length - 1);
            } else {
                setIndex(index - 1);
            }
        } else if (direction === "right") {
            if (index === (thumbnails.length - 1)) {
                setIndex(0);
            } else {
                setIndex(index + 1);
            }
        } 
    }

    function updateThumbnail() {
        const info = thumbnails[index];

        setThumbnail(info.thumbnail);
        setHeader(info.header);
        setDescription(info.description);
    }

    function onClick() {
        navigate("./projects");
    }

    /* whenever the value of the index changes, update the current thumbnail accordingly */
    useEffect(() => {
        updateThumbnail();
    }, [index]);

    return (
        <div className="thumbnail-container">  
            <img className="thumbnail-img" src={thumbnail}/>
            <div className="thumbnail-elements">
                <div className="thumbnail-text">
                    <h1 className="thumbnail-header">
                        {header}
                    </h1>
                    <div className="thumbnail-extra-info">
                        <h5 className="thumbnail-description">
                            {description}
                        </h5>
                        <Button className="thumbnail-button" text="LEARN MORE" onClick={onClick}/>
                    </div>
                </div>
                <Navigator className="thumbnail-navigator" updateIndex={updateIndex}/>
            </div>
        </div>
    );
}

export default Thumbnail;