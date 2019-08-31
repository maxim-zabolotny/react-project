import React from "react";
import {addPostActionCreator, UpdateNewPostText} from '../../../Redux/profile-reduser';
import MyPosts from "./MyPosts";




const MyPostsContainer = (props) => 
{


  let state = props.store.getState();

  console.log(state);

  
  

  let addPost = () => {

    props.store.dispatch(addPostActionCreator());


  };

  

  let onPostChange = (text) => {
    let action = UpdateNewPostText(text);
    props.store.dispatch(action);

  }

  return (
    <MyPosts 
    UpdateNewPostText={onPostChange} 
    addPost={addPost}
    post ={state.profileReducer.post}

    /> 
  );
};
export default MyPostsContainer;
