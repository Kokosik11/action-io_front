import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import Header from '../Header';

import EditSquare from "../../assets/Edit-Square.svg";

const Action = ({action}) => {
    return (
        <div className="action action-item">
            <div className="action-item_content">
                <h4>{action.title}</h4>
                <input 
                    type="checkbox" 
                    id={"isCompleted_"+action.id}
                    defaultChecked={action.isCompleted && "checked" || ""}
                    disabled="disabled" 
                />
                <label htmlFor={"isCompleted_"+action.id}> completed</label>
            </div>
        </div>
    )
}

const UserProject = props => {
    const { id, projectId } = useParams();

    const [ user, setUser ] = useState();
    const [ project, setProject ] = useState();
    const [ isCompleted, setIsCompleted ] = useState(0);

    useEffect(() => {
        props.isUserAuthenticated();
    }, [])

    useEffect(() => {
        let users = JSON.parse(localStorage.getItem('users'));
        users.forEach(user => {
            if(user.id === id) {
                setUser(user);
                user.projects.forEach(_project => {
                    if(_project.id === projectId) {
                        setProject(_project)
                    }
                })
            }
        });
    }, [])

    useEffect(() => {
        if(project) {
            setIsCompleted(0);
            project.actions.forEach(action => {
                if(action.isCompleted) setIsCompleted(isCompleted => ++isCompleted);
            })        
        }
        
    }, [project])

    return project && (
        <div className="Project">
            <Header back={user.id} />
            <div className="project-content">
                    <div className="project-header">
                        <div className="project-heading">
                            <div className="project-left">
                                <h3>{project.title}</h3>
                                <div className="project-description">{project.description}</div>
                            </div>
                        </div>
                        
                        <div className="project-progress_content">
                            <div className="project-progress">
                                <div className="project-progress-bar" style={{ width: `${isCompleted / project.actions.length * 100 }%`}}></div>
                                <span className="project-progress-percent">{Math.round(isCompleted / project.actions.length * 100) || 0 }%</span>
                            </div>
                            <div className="project-progress_number">Completed actions: {isCompleted}/{project.actions.length}</div>
                        </div>
                    </div>
                
                
                <div className="project-actions">
                    {project.actions && project.actions.map(action => (
                        <Action 
                            key={action.id} 
                            action={action} 
                        />
                    ))}
                    
                </div>

            </div>
        </div>
    ) || (
        <h1>Project not found</h1>
    )
}

export default UserProject;