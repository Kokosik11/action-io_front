import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EditSquare from "../../../assets/Edit-Square.svg";

import "./style.css";

const ActionPlace = props => {
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('currentUser'));

        if(user.projects) setProjects([...user.projects]);
    }, [])

    const dateNow = new Date();

    const getTimeLefts = time => {
        let after = Math.trunc((dateNow - new Date(time)) / 1000 / 60 / 60)
        
        if(after > 24 * 30) {
            return (
                <span>{Math.trunc(after/24/30)} months after</span>
            )
        } else if(after > 24 * 7) {
            return (
                <span>{Math.trunc(after/24/7)} weeks after</span>
            )
        } else if(after > 24) {
            return (
                <span>{Math.trunc(after/24)} days after</span>
            )
        } else {
            return (
                <span>{after} hours after</span>
            )
        }
    }

    return (
        <div className="actionplace">
            <div className="actionplace-content">

                <div className="action-create">
                    <button onClick={() => props.handleButtonClick(3)}>
                        <img src={EditSquare} alt="Edit Square icon" />
                        Add project
                    </button>
                </div>

                {projects && projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="Action">
                        <div className="action-heading">
                            <div className="daylefts">
                                <div className="circle red"></div>
                                <div className="daylefts-content">
                                    {getTimeLefts(project.atCreated)}
                                </div>
                            </div>
                            
                            <div className="action-title">
                                <h2>{project.title}</h2>
                                <div className="description">{project.description}</div>
                            </div>
                        </div>
                        

                        <div className="mini-statistic">
                            Actions: {project.actions.length}
                        </div>
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

export default ActionPlace;