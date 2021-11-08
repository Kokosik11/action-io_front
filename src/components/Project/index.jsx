import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import Header from '../Header';

import EditSquare from "../../assets/Edit-Square.svg";

import "./style.css";

const Action = ({action, handleChangeActionCompleted, handleActionSave, handleActionDelete}) => {
    const [ isEdit, setEdit ] = useState(false);
    const [ actionTitle, setActionTitle ] = useState(action.title);

    const handleActionButtonEdit = () => {
        setEdit(isEdit => !isEdit);
    }

    return isEdit && (
        <div className="action action-item">
            <div className="action-forms">
                <input 
                    type="text" 
                    placeholder="Title"
                    value={actionTitle}
                    onChange={e => setActionTitle(e.target.value)}
                /> 
            </div>
            
            <div className="action-btns">
                <button onClick={() => { handleActionSave(action.id, actionTitle); handleActionButtonEdit() }}>Save</button>
                <button onClick={handleActionButtonEdit}>Cancel</button>
                <button onClick={() => handleActionDelete(action.id)}>Delete</button>
            </div>
        </div>
    ) || (
        <div className="action action-item">
            <div className="action-item_content">
                <h4>{action.title}</h4>
                <input 
                    type="checkbox" 
                    id={"isCompleted_"+action.id}
                    checked={action.isCompleted && "checked" || ""} 
                    onChange={() => handleChangeActionCompleted(action.id)}
                />
                <label htmlFor={"isCompleted_"+action.id}> completed</label>
            </div>
            <div className="action-edit_button">
                <button onClick={handleActionButtonEdit}>Edit</button>
            </div>
        </div>
    )
}

const Project = props => {
    const { id } = useParams();

    const [ project, setProject ] = useState();
    const [ isCompleted, setIsCompleted ] = useState(0);
    const [ addAction, setAddAction ] = useState(false);
    const [ isProjectEdit, setProjectEdit ] = useState(false);

    // project options 
    const [ projectTitle, setProjectTitle ] = useState();
    const [ projectDescription, setProjectDescription ] = useState();

    // create action
    const [ actionTitle, setActionTitle ] = useState("");
    const [ isActionCompleted, setActionCompleted ] = useState(false);

    useEffect(() => {
        props.isUserAuthenticated();
    }, [])

    useEffect(() => {
        let projects = JSON.parse(localStorage.getItem('currentUser')).projects;
        
        projects.forEach(_project => {
            if(_project.id === id) {
                return setProject(_project);
            }
        })
    }, [])

    useEffect(() => {
        if(project) {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            for(let i = 0; i < user.projects.length; i++) {
                if(user.projects[i].id === id) {
                    user.projects[i] = project;
                }
            }
            
    
            localStorage.setItem('currentUser', JSON.stringify(user))
    
            let users = JSON.parse(localStorage.getItem('users'));
            for(let i = 0; i < users.length; i++) {
                if(users[i].id === user.id) {
                    users[i] = user;
                }
            }
    
            localStorage.setItem('users', JSON.stringify(users));

            setProjectTitle(project.title);
            setProjectDescription(project.description);
        }

    }, [project])

    useEffect(() => {
        if(project) {
            setIsCompleted(0);
            project.actions.forEach(action => {
                if(action.isCompleted) setIsCompleted(isCompleted => ++isCompleted);
            })        
        }
        
    }, [project])

    
    const handleChangeActionCompleted = (id) => {
        console.log("checked")
        let actions = project.actions.map(action => (
            (action.id === id && { ...action, isCompleted: !action.isCompleted }) || action
        ))

        console.log(actions)

        setProject(project => {
            return { ...project, actions: [...actions] };
        });

        console.log(project)
    }

    const handleClickAddAction = () => {
        setAddAction(action => !action);
    }

    const handleActionButtonAdd = () => {
        if(actionTitle) {
            setProject(project => {
                return { ...project, actions: [{ id: shortid.generate(), title: actionTitle, isCompleted: isActionCompleted }, ...project.actions]};
            })

            handleClickAddAction();
        }
    }

    const handleActionSave = (id, title) => {
        project.actions.forEach(action => {
            if(action.id === id) {
                action.title = title;
                setProject(project => {
                    return { ...project, actions: [...project.actions] }
                })
            }
        })
    }

    
    const deleteProject = () => { 
        if(project) {
            let user = JSON.parse(localStorage.getItem('currentUser'));
            let _projects = user.projects.filter(_project => _project.id !== project.id);
            user.projects = [..._projects];
            
    
            localStorage.setItem('currentUser', JSON.stringify(user))
    
            let users = JSON.parse(localStorage.getItem('users'));
            for(let i = 0; i < users.length; i++) {
                if(users[i].id === user.id) {
                    users[i] = user;
                }
            }
    
            localStorage.setItem('users', JSON.stringify(users));
            window.location = '/';
        }
    }
    
    const handleActionDelete = (id) => {
        let actions = project.actions.filter(action => action.id !== id);

        setProject(project => {
            return { ...project, actions: [...actions] }
        })
    }

    const handleProjectButtonEdit = () => {
        setProjectEdit(isProjectEdit => !isProjectEdit);
    }

    const handleProjectButtonSave = () => {
        if(projectTitle || projectDescription) {
            setProject(project => {
                project.title = projectTitle;
                project.description = projectDescription;
                return { ...project };
            })
            handleProjectButtonEdit();
        }
    }

    return project && (
        <div className="Project">
            <Header />
            <div className="project-content">
                { isProjectEdit && (
                    <div className="project-header">
                        <label htmlFor="projectTitle">Title: </label>
                        <input 
                            type="text" 
                            placeholder="Project title..." 
                            id="projectTitle"
                            name="projectTitle"
                            value={projectTitle}
                            onChange={e => setProjectTitle(e.target.value)}
                        />

                        <label htmlFor="projectDescription">Description: </label>
                        <textarea 
                            type="text" 
                            placeholder="Project description..." 
                            id="projectDescription"
                            name="projectDescription"
                            value={projectDescription}
                            onChange={e => setProjectDescription(e.target.value)}
                        />

                        <div className="project-btns">
                            <div className="project-btns_left">
                                <button onClick={handleProjectButtonSave}>Save</button>
                                <button onClick={handleProjectButtonEdit}>Cancel</button>
                            </div>
                            
                            <div className="project-btns_right">
                                <button onClick={deleteProject}>Delete</button>
                            </div>
                        </div>
                    </div>
                ) || (
                    <div className="project-header">
                        <div className="project-heading">
                            <div className="project-left">
                                <h3>{project.title}</h3>
                                <div className="project-description">{project.description}</div>
                            </div>
                            <div className="project-right">
                                <button onClick={handleProjectButtonEdit}>Edit</button>
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
                )}
                
                
                <div className="project-actions">
                    {addAction && (
                        <div className="action action-add">
                            <div className="action-forms">
                                <input 
                                    type="text" 
                                    placeholder="Title"
                                    value={actionTitle}
                                    onChange={e => setActionTitle(e.target.value)}
                                /> 
                                <div className="iscompleted">
                                    <input 
                                        id="isCompleted" 
                                        type="checkbox" 
                                        checked={isActionCompleted && "checked"}
                                        onChange={() => setActionCompleted(isActionCompleted => !isActionCompleted)}
                                    />
                                    <label htmlFor="isCompleted">is completed</label>
                                </div>
                            </div>
                            
                            <div className="action-btns">
                                <button onClick={handleActionButtonAdd}>Add</button>
                                <button onClick={handleClickAddAction}>Cancel</button>
                            </div>
                            
                        </div>
                    ) || (
                    <div className="action action-create">
                        <button onClick={handleClickAddAction}>
                            <img src={EditSquare} alt="Edit Square icon" />
                            Add action
                        </button>
                    </div>
                    )}

                    {project.actions && project.actions.map(action => (
                        <Action 
                            key={action.id} 
                            action={action} 
                            handleChangeActionCompleted={handleChangeActionCompleted} 
                            handleActionSave={handleActionSave}
                            handleActionDelete={handleActionDelete}
                        />
                    ))}
                    
                </div>

            </div>
        </div>
    ) || (
        <h1>Project not found</h1>
    )
}

export default Project;