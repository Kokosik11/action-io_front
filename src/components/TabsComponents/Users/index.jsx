import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Users = () => {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        let localUsers = JSON.parse(localStorage.getItem('users'));
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let _users = localUsers.filter(user => user.id !== currentUser.id);

        setUsers([..._users]);
    }, [])
    
    return (
        <div className="actionplace">
            <div className="actionplace-content">
                {users.map(user => (
                    <Link key={user.id} to={`/user/${user.id}`} className="users-action">
                        <h2>{user.username}</h2>
                        <div>Projects: {user.projects.length}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Users;