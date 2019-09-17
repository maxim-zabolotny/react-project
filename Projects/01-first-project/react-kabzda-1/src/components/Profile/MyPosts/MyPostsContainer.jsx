import React from "react";
import {addPostActionCreator, UpdateNewPostText} from '../../../Redux/profile-reduser';
import MyPosts from "./MyPosts";
import {connect} from 'react-redux';






let mapStateToProps = state => {
  
  return {
    
    post: state.profileReducer.post,
    newPostText: state.profileReducer.newPostText
  }

}

let mapDispatchToProps = dispatch => {
  return {
    UpdateNewPostText: (text) => {
      let action = UpdateNewPostText(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
