import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './style.css';

import Logo from '../../assets/logo.png';
import UnkAvatar from '../../assets/unknown-avatar.png';

const Header = props => {
    const [ username, setUsername ] = useState();

    useEffect(() => {
        let localUser = JSON.parse(localStorage.getItem('currentUser'));
        setUsername(localUser.username);
    }, []);

    return (
        <div className="Header">
            <Link to="/" className="Logo">
                <img src={Logo} alt="Logo"/>
                <h1>Action.io</h1>
            </Link>

            {props.back && <Link to={`/user/${props.back}`}>Back</Link> }

            <div className="user-details">
                <div className="welcome-phrase">Lets do this, <button>{username}</button></div>
                <img className="avatar" src={props.avatar ? props.avatar : UnkAvatar} alt="avatar"/>
            </div>
        </div>
    )
}

export default Header;