import React, { useState, useEffect } from "react"
import { ActionPlace, ActionPlaceSearch, Users, CurrentProject, CreateProject } from "../TabsComponents";
import Search from "../../assets/Search.svg";

import './style.css';

const Tabs = props => {
    const [ currentTab, setCurrentTab ] = useState(0);
    const [ search, setSearch ] = useState("");
    const [ projects, setProjects ] = useState([]);
    const [ searchProjects, setSearchProjects ] = useState([]);


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('currentUser'));

        if(user.projects) setProjects([...user.projects]);
    }, [])

    const handleButtonClick = num => {
        setCurrentTab(num);
    }
    
    const onSearchStarted = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        if(projects) {
            const value = search.toLowerCase();
    
            const result = projects.filter(item => {
                return item.title.toLowerCase().search(value) !== -1
            })
    
            console.log(result);
    
            setSearchProjects([...result]);
        }
    }, [search])

    return (
        <div className="content">
            <div className="Tabs">
                <div className="tabHeader">
                    <div className="navigation">
                        <button onClick={() => { handleButtonClick(0) }} className={currentTab === 0 && "tab-button tab-button_active" || "tab-button"}>My Projects</button>
                        <button onClick={() => { handleButtonClick(1) }} className={currentTab === 1 && "tab-button tab-button_active" || "tab-button"}>Users</button>
                        <button onClick={() => { handleButtonClick(2) }} className={currentTab === 2 && "tab-button tab-button_active" || "tab-button"}>Current Project</button>
                    </div>

                    <div className="search">
                        <img src={Search} alt="Search icon" /   >
                        <input 
                            type="text" 
                            placeholder="Discover" 
                            value={search} 
                            onChange={onSearchStarted}
                        />
                    </div>
                </div>

                <div className="component-papper">
                    { search && <ActionPlaceSearch searchProjects={searchProjects} /> ||
                    (currentTab === 0 && <ActionPlace handleButtonClick={handleButtonClick} />) ||
                    (currentTab === 1 && <Users />) ||
                    (currentTab === 2 && <CurrentProject />) ||
                    (currentTab === 3 && <CreateProject handleButtonClick={handleButtonClick} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Tabs;