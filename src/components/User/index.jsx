import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import shortid from 'shortid';

import Header from '../Header';

import EditSquare from "../../assets/Edit-Square.svg";

import "./style.css";

const User = props => {
    const { id } = useParams();

    const [ user, setUser ] = useState();
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        props.isUserAuthenticated();
    }, [])

    useEffect(() => {
        let users = JSON.parse(localStorage.getItem('users'));

        users.forEach(_user => {
            if(_user.id === id) {
                setUser(_user);
                setProjects([..._user.projects]);
            }
        })

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

    return user && (
        <div className="user">
            <Header />
            <h3>{user.username}</h3>
            <div className="actionplace">
                <div className="actionplace-content">
                {projects && projects.map((project) => (
                    <Link to={`/user/${user.id}/project/${project.id}`} key={project.id} className="Action">
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
        </div>
    ) || (
        <h1>Page not found</h1>
    )
}

export default User;