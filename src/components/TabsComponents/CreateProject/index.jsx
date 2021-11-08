import React, { useState, useEffect } from 'react';

import shortid from 'shortid';

import "./style.css";

const CreateProject = props => {
    const [ projectTitle, setProjectTitle ] = useState("");
    const [ projectDescription, setProjectDescription ] = useState("");
    const [ projectActions, setProjectActions ] = useState([]);
    const [ error, setError ] = useState("")
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ user, setUser ] = useState({});

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("currentUser"));
        setUser(user);
    }, [])

    const addAction = () => {
        let action = { id: shortid.generate(), title: "", isCompleted: false }

        setProjectActions([action, ...projectActions]);
    }
    
    const handleChangeActionCompleted = (id) => {
        let actions = projectActions.map(action => (
            (action.id === id && { ...action, isCompleted: !action.isCompleted }) || action
        ))

        setProjectActions([...actions]);
    }

    const handleChangeActionTitle = (id, value) => {
        let actions = projectActions.map(action => (
            (action.id === id && { ...action, title: value }) || action
        ))

        setProjectActions([...actions]);
    }

    const submitHandler = e => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        if(!projectTitle) return setError("Project Title is required");
        if(!projectDescription) return setError("Project Description is required");

        let project = { 
            id: shortid.generate(),
            title: projectTitle,
            description: projectDescription,
            actions: projectActions && [...projectActions] || [],
            author: user.username,
            atCreated: Date(),
        }

        if(!user.projects) {
            setUser(user => { 
                return { ...user, projects: [ project ] }
            })
        } else {
            setUser(user => {
                return { ...user, projects:  [...user.projects, project ] }
            })
        }
    }

    useEffect(() => {
        localStorage.setItem('currentUser', JSON.stringify(user))

        let users = JSON.parse(localStorage.getItem('users'));
        for(let i = 0; i < users.length; i++) {
            if(users[i].id === user.id) {
                users[i] = user;
            }
        }

        localStorage.setItem('users', JSON.stringify(users));

        console.log(user);
    }, [user])

    return (
        <div className="create-project">
            <h2>Create project</h2>
            <div className="create-project_content">
                <div className="ErrorMessage">
                    {error}
                </div>
                <input 
                    type="text" 
                    placeholder="Project title..." 
                    id="projectTitle"
                    name="projectTitle"
                    onChange={e => setProjectTitle(e.target.value)}
                />

                <textarea 
                    type="text" 
                    placeholder="Project description..." 
                    id="projectDescription"
                    name="projectDescription"
                    onChange={e => setProjectDescription(e.target.value)}
                />

                <div className="project-action">
                    <div className="project-action_heading">
                        <div className="project-action_title">Project actions</div>
                        <button className="project-action_add" onClick={() => addAction()}>+</button>
                    </div>
                    <div className="project-action_placement">
                        {projectActions.map(action => (
                            <div key={action.id} className="project-action_new-action">
                                <input
                                    type="text"
                                    placeholder="Action title..."
                                    id="action"
                                    name="action"
                                    onChange={e => handleChangeActionTitle(action.id, e.target.value)}
                                />
                                <input 
                                    type="checkbox"
                                    name="isCompleted"
                                    id="isCompleted"
                                    checked={action.isCompleted ? "checked" : "" }
                                    onChange={() => handleChangeActionCompleted(action.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={submitHandler}>Create project</button>
            </div>
        </div>
        
    )
}

export default CreateProject;