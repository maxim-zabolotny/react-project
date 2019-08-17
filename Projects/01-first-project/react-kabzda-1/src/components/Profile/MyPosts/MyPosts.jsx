import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => 
{

  let postsData = props.post.map(post => (
    <Post message={post.message} like_counts={post.like_counts} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {

    props.dispatch({type: 'ADD-POST'});


  };

  

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({type:'UPDATE-NEW-POST-TEXT', newPost: text});

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
