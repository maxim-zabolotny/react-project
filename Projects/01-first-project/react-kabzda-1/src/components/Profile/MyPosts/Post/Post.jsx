import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div className={s.item} >
      <img  src="http://mignews.com.ua/modules/news/images/articles/changing/16789166-cukerberg-nameren-sozdat-globalnoe-soob.jpg" />
      {props.message};
      <div>
        {props.like_counts }<span> like:</span>
      </div>
    </div>
  );
};

export default Post;
