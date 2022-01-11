import React from "react";
import s from "./Post.module.css";
import PostText from "./PostText/PostText";

const Post = () => {
    return (
      <div className={s.content__post}>
        <PostText />
      </div>
    );
};

export default Post;