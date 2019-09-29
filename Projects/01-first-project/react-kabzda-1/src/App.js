import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import DialogsComponent from "./components/Dialogs/DialogsComponent";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
  
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div class='app-wrapper-content'>
          
          <Route path='/profile/:userId?' render={ () =>
           <ProfileContainer/>} />
          <Route path='/dialogs' render={ () => 
          <DialogsComponent />} />
          <Route path='/users' render={() => <UsersContainer/>} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />}/>
          <Route path='/settings' render={ () => <Settings className="settings"/>} />

        </div>
      </div>
    
  )};


export default App;
