import React from "react";
import PageDescription from "../PageDescription.jsx";
import ProjectSection from "../ProjectSection.jsx";
import TrappedPlatformIcon from "../../assets/trapped-platform-icon.png";
import WordUnscramblerIcon from "../../assets/word-unscrambler-icon.png";
import MyWebsiteIcon from "../../assets/my-website-icon.png";

function Projects() {
    /* id holds the substring to add for routing */
    const games = [
        {
            name: "TRAPPED PLATFORM",
            date: "NOV 2024 - FEB 2025",
            icon: TrappedPlatformIcon,
            bullets: 
            [
                "CODED ENTIRELY IN LUAU AND EFFICIENTLY HANDLED/STORED PLAYER DATA ON THE BACKEND",
                "EXTENSIVE SERVER-SIDE CHECKS TO ENSURE THE VALIDITY OF REMOTE EVENTS FIRED TO THE SERVER BY CLIENTS",
                "EFFECTIVELY CLEANED UP EVENT LISTENERS AND SCRIPT-MADE OBJECTS TO AVOID MEMORY LEAKS AND DECREASE CLIENT MEMORY USAGE",
                "MODULARIZED CODE ON BOTH THE FRONTEND AND BACKEND, ALLOWING NEW FEATURES TO BE SEAMLESSLY INTEGRATED INTO THE PRE-EXISTING CODE"
            ],
            id: "trapped-platform"
        },
        {
            name: "WORD UNSCRAMBLER",
            date: "JUNE 2024 - OCT 2024",
            icon: WordUnscramblerIcon,
            bullets: 
            [
                "PLAYED 2,000,000+ TIMES BY PLAYERS ON ROBLOX",
                "TOP 95TH PERCENTILE REGARDING USER CONVERSION RATE FOR MONETIZATION",
                "IMPROVED USER RETENTION BY OVER 50% BY IMPLEMENTING DAILY CHALLENGES AND A TUTORIAL",
                "CODED ENTIRELY IN LUAU"
            ],
            id: "word-unscrambler"
        }
    ];
    const web = [
        {
            name: "PERSONAL WEBSITE",
            date: "FEB 2025 - PRESENT",
            icon: MyWebsiteIcon,
            bullets: 
            [
                "FRAMEWORKS/LIBRARIES USED: REACT (FRONTEND), EXPRESS (BACKEND), MONGOOSE (BACKEND/DATABASE)",
                "IMPLEMENTED REST REQUESTS (SPECIFICALLY \"POST\"), ALLOWING COMMUNICATION BETWEEN THE FRONTEND AND BACKEND",
                "CONNECTED A REMOTE MONGODB DATABASE TO VALIDATE, COLLECT AND STORE FORM SUBMISSIONS",
                "MODULARIZED CODE ON THE FRONTEND, ALLOWING SIMILAR COMPONENTS TO BE EASILY USED ON DIFFERENT PAGES",
                "CODED IN JAVASCRIPT AND VISUALLY FORMATTED USING CSS",
                "FRONTEND AND BACKEND WERE DEPLOYED USING VERCEL"
            ],
            id: "personal-website"
        },
    ];
    const mobileApp = [

    ];

    return (
        <>
            <PageDescription
                page="PROJECTS"
                description="TAKE A LOOK AT MY PAST AND ONGOING PROJECTS HERE!"
            />
            <ProjectSection 
                sectionHeader="WEB DEVELOPMENT"
                projectEntries={web}
            />
            <ProjectSection 
                sectionHeader="GAME DEVELOPMENT"
                projectEntries={games}
            />
        </>
    );
}

export default Projects;