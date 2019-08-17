import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

 
  
  return (
    
    <div>
      
      <ProfileInfo />
      <MyPosts post=
      {props.state.post} 
      newPostText={props.state.newPostText}
      dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
