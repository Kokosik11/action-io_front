import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

import "./style.css";

import Cookie from '../../../tools/Cookies';

const setHashedPasswordWithSalt = (password, salt) => {
    let hash = bcrypt.hashSync(password, salt)
    return hash;
}

const Login = () => {
    const [ error, setError ] = useState("")
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");


    const hasUserAuthenticated = () => {
        window.location = '/';
    }

    const handleLoginSubmit = () => {
        setError("");
        
        if(!username) return setError("Username is empty");
        if(!password) return setError("Password is empty");

        const users = JSON.parse(localStorage.getItem("users"));
        if(!users) return setError("This username is not a valid");

        for(let i = 0; i < users.length; i++) {
            if(users[i].username === username && users[i].cryptoPass && bcrypt.compareSync(password, users[i].cryptoPass[1])) {
                Cookie.setCookie('user', users[i].id, { 'max-age': 3600 });
                localStorage.setItem('currentUser', JSON.stringify(users[i]));
                hasUserAuthenticated();
            }
        }

        return setError("Password is not valid");

    }

    return (
        <div className="Login">
            <div className="ErrorMessage">
                {error}
            </div>
            <div>
                <label htmlFor="username">Your username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            
            <div>
            <label htmlFor="password">Your password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button className="LoginBtn" onClick={handleLoginSubmit}>Log in</button>
        </div>
    )
}

export default Login;