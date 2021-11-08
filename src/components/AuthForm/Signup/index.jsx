import React, { useContext, useState } from 'react';
import bcrypt from 'bcryptjs';
import shortid from 'shortid';

const setCryptPassword = (password) => {
    let salt = bcrypt.genSaltSync(10)
    let hash = bcrypt.hashSync(password, salt)
    
    return [salt, hash];
}

const Signup = ({isSingUpConfirmed}) => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ error, setError ] = useState("")
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ repeatPass, seReapetPass ] = useState("");

    const handleSignupSubmit = () => {
        setError("");
        setIsSubmitting(true);

        if(!username) {
            setIsSubmitting(false);
            return setError("Please enter your username");
        }
        if(password === repeatPass) {
            let users = JSON.parse(localStorage.getItem("users"));
            let cryptoPass = setCryptPassword(password);

            if(!users) {
                localStorage.setItem("users", JSON.stringify([{ id: shortid.generate(), username, cryptoPass }]));
                setIsSubmitting(false);
                setError("");
                return isSingUpConfirmed();
            }

            for(let i = 0; i < users.length; i++) {
                if(users[i].username === username) { 
                    setIsSubmitting(false);
                    console.log(users.username)
                    return setError("Username already exists");
                }
            }

            users.push({ id: shortid.generate(), username, cryptoPass })
            localStorage.setItem("users", JSON.stringify(users));

            setIsSubmitting(false);
            setError("");
            return isSingUpConfirmed();
        } else {
            setIsSubmitting(false);
            return setError("Your repeated password is incorrect");
        }

    }

    return (
        <div className="Signup">
            <div className="ErrorMessage">
                {error}
            </div>
            <div>
                <label htmlFor="username">Your username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={e => setUsername(e.target.value)}
                />
            </div>
            
            <div>
                <label htmlFor="password">Your password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            
            <div>
                <label htmlFor="repeatpass">Repeat your password</label>
                <input 
                    type="password" 
                    name="repeatpass" 
                    id="repeatpass"
                    onChange={e => seReapetPass(e.target.value)}
                />
            </div>
            
            <button className="LoginBtn" onClick={handleSignupSubmit}>{isSubmitting ? "Waiting..." : "Sign up"}</button>
        </div>
    )
}

export default Signup;