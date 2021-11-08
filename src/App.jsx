import { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link,
  useHistory
} from "react-router-dom";

import Cookie from './tools/Cookies';

// import './App.css'
import shortid from 'shortid';

import Main from "./components/Main";
import AuthForm from "./components/AuthForm";
import Project from "./components/Project";
import User from "./components/User";
import UserProject from "./components/UserProject";

function App() {
  let history = useHistory();
  useEffect(() => {
    let userId = Cookie.getCookie('user');
    if(!userId) {
      localStorage.removeItem('currentUser');
    }
  }, [])

  const isUserAuthenticated = () => {
    if(!document.cookie) history.push('/auth');
  }

  
  // generate demo users 
  useEffect(() => {
    if(!JSON.parse(localStorage.getItem("users"))) { 
      let users = [
        { id: shortid.generate(), username: "Konstantin", projects: [
          { id: shortid.generate(), title: "Create Action.io", description: "Action.io development plan", atCreated: Date.now(), author: "Konstantin", actions: [
            { id: shortid.generate(), title: "Develop an idea", isCompleted: true },
            { id: shortid.generate(), title: "Make a design", isCompleted: true },
            { id: shortid.generate(), title: "Pick up a stack", isCompleted: true },
            { id: shortid.generate(), title: "Start development", isCompleted: true },
            { id: shortid.generate(), title: "Upload to github", isCompleted: false },

          ] },
          { id: shortid.generate(), title: "Test", description: "Test project", atCreated: Date.now(), author: "Konstantin", actions: [
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: true },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: false },
            { id: shortid.generate(), title: "Test", isCompleted: false },
          ] },
        ]}, 
        { id: shortid.generate(), username: "Vasya", projects: [
          { id: shortid.generate(), title: "Grocery list", description: "I need to go to the store", atCreated: Date.now(), author: "Vasya", actions: [
            { id: shortid.generate(), title: "Buy milk", isCompleted: true },
            { id: shortid.generate(), title: "Buy bread", isCompleted: true },
            { id: shortid.generate(), title: "Buy cigarettes", isCompleted: true },
            { id: shortid.generate(), title: "Buy water", isCompleted: true },
            { id: shortid.generate(), title: "Buy pasta", isCompleted: false },
            { id: shortid.generate(), title: "Buy a loaf", isCompleted: false },
            { id: shortid.generate(), title: "Buy butter", isCompleted: false },
            { id: shortid.generate(), title: "Buy cola", isCompleted: false },

          ] },
          { id: shortid.generate(), title: "Grocery list 2", description: "I need to go to the store", atCreated: Date.now(), author: "Vasya", actions: [
            { id: shortid.generate(), title: "Buy milk", isCompleted: true },
            { id: shortid.generate(), title: "Buy bread", isCompleted: true },
            { id: shortid.generate(), title: "Buy water", isCompleted: true },
            { id: shortid.generate(), title: "Buy pasta", isCompleted: false },
            { id: shortid.generate(), title: "Buy cola", isCompleted: false },

          ] },
          { id: shortid.generate(), title: "Grocery list 3", description: "I need to go to the store", atCreated: Date.now(), author: "Vasya", actions: [
            { id: shortid.generate(), title: "Buy cigarettes", isCompleted: true },
            { id: shortid.generate(), title: "Buy water", isCompleted: true },
            { id: shortid.generate(), title: "Buy pasta", isCompleted: false },
            { id: shortid.generate(), title: "Buy a loaf", isCompleted: false },
            { id: shortid.generate(), title: "Buy butter", isCompleted: false },
            { id: shortid.generate(), title: "Buy cola", isCompleted: false },

          ] },
        ]}
      ]

      localStorage.setItem("users", JSON.stringify(users));
    }
  }, [])

  return (
    <div className="App">
        <Switch>
          <Route exact path="/">
            <Main isUserAuthenticated={isUserAuthenticated} />
          </Route>

          <Route path="/auth">
            <AuthForm />
          </Route>

          <Route path="/project/:id">
            <Project isUserAuthenticated={isUserAuthenticated} />
          </Route>

          <Route path="/user/:id/project/:projectId">
            <UserProject isUserAuthenticated={isUserAuthenticated} />
          </Route>

          <Route path="/user/:id">
            <User isUserAuthenticated={isUserAuthenticated} />
          </Route>

          <Route>
            <h1>Page not found</h1>
          </Route>
        </Switch>
    </div>
  )
}

export default App
