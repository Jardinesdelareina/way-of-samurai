import React from "react";
import s from "./Post.module.css";

const MessageUser = (props) => {
  return <p>{props.message}</p>;
};

const Post = (props) => {
  let postElement = props.myPost.map((p) => {
    return (
      <div className={s.content__post}>
        <div className={s.post__container}>
          <div className={s.post__ava}>
            <img className={s.ava__user} src="ava.png" />
          </div>
          <div className={s.post__user}>
            <MessageUser message={p.message} />
          </div>
        </div>
      </div>
    );
  });

  return <div className={s.post__text}>{postElement}</div>;
};

export default Post;