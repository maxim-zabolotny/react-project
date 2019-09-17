import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsComponent from "./components/Dialogs/DialogsComponent";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import Users from "./components/Users/Users";

const App = (props) => {
  
  return (
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div class='app-wrapper-content'>
          
          <Route path='/profile' render={ () =>
           <Profile />} />
          <Route path='/dialogs' render={ () => 
          <DialogsComponent />} />
          <Route path='users' render={() => <Users/>} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />}/>
          <Route path='/settings' render={ () => <Settings className="settings"/>} />

        </div>
      </div>
    
  )};


export default App;
