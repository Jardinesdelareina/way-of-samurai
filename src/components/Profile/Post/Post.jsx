import React from "react";
import s from "./Post.module.css";
import PostAva from "./PostAva/PostAva";
import PostText from "./PostText/PostText";



const Post = () => {
    return (
      <div className={s.content__post}>
        <PostAva/>
        <PostText message="Hi! How are you?" likeCount="14" />
      </div>
    );
};

export default Post;