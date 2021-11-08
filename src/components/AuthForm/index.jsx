import React, { useContext, useState, useEffect, useCallback } from 'react';

import Logo from "../../assets/logo.png";
// import "./welcome.css";

import Login from "./Login";
import Signup from "./Signup";
// import Main from "./components/Main";

// import Loader from "./elements/Loader";

const ForLogin = (props) => {
  return(
    <div>
      <div className="is-content">
        <div className="line"></div>
        <div className="IsNotAuth">if not sign up?</div>
        <div className="line"></div>
      </div>
      <button className="SignupBtn second-btn" onClick={props.handle}>Create account</button>
    </div>
  )
}

const ForSignup = (props) => {
  return(
    <div>
      <div className="is-content">
        <div className="line"></div>
        <div className="IsNotAuth">Already sign up?</div>
        <div className="line"></div>
      </div>
      <button className="LoginBtn second-btn" onClick={props.handle}>Log in</button>
    </div>
  )
}

const AuthForm = () => {
    const [ isSingUp, setSingUp ] = useState(false);

    const isSingUpConfirmed = () => {
        setSingUp(false)
    }

    const handleButtonClick = () => {
        setSingUp(isSingUp => !isSingUp);
    }

    return (
        <div className="AuthForm">
            <div className="Form">
                <div className="heading">
                    <img src={Logo} alt="Logo"/>
                    <h1>Action.io</h1>
                </div>
                <div className="FormContent">
                    {isSingUp && <Signup isSingUpConfirmed={isSingUpConfirmed} /> || <Login />}
                    {isSingUp && <ForSignup handle={handleButtonClick}/> || <ForLogin handle={handleButtonClick}/>}
                </div>
            </div>
        </div>
    )
}

export default AuthForm;
