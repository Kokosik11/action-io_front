import React, { useEffect, useState } from 'react'; 

import Header from '../Header';
import Tabs from '../Tabs';

import "./style.css";

const Main = ({isUserAuthenticated}) => {    
    useEffect(() => {
        isUserAuthenticated();
    }, [])

    return (
        <div className="main-wrapper">
            <Header />
            <Tabs />
        </div>
    )
}

export default Main;