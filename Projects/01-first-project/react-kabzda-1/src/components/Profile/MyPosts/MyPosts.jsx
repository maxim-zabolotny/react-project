import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, UpdateNewPostText} from '../../../Redux/profile-reduser';




const MyPosts = (props) => 
{

  let postsData = props.post.map(post => (
    <Post message={post.message} like_counts={post.like_counts} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {

    props.dispatch(addPostActionCreator());


  };

  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = UpdateNewPostText(text);
    props.dispatch(action);

  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} />
        </div>

        <div className={s.add}>
          <button onClick={addPost}>Add</button>
        </div>
      </div>
      <div className={s.posts}>{postsData}</div>
    </div>
  );
};

export default MyPosts;
