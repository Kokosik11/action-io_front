import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ActionPlaceSearch = props => {
    const [ projects, setProjects ] = useState([...props.searchProjects]);
    
    useEffect(() => {
        setProjects(props.searchProjects);
    }, [props.searchProjects])

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
        <div className="actionplace" key={props.searchProjects}>
            <div className="actionplace-content">

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

export default ActionPlaceSearch;