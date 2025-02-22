import React from "react";
import ProjectEntry from "./ProjectEntry.jsx";
import "./ProjectSection.css";

function ProjectSection(props) {
    return (
        <div className="project-container">
            <h1 className="section-header">
                {props.sectionHeader}
            </h1>
            <ul className="section-entries">
                {props.projectEntries?.map ((proj) => {
                    return (
                        <ProjectEntry key={proj.id}
                            projectName={proj.name}
                            projectDate={proj.date}
                            projectIcon={proj.icon}
                            projectBullets={proj.bullets}
                            projectId={proj.id}
                        />
                    )
                })}
            </ul>
        </div>
    );
}

export default ProjectSection;