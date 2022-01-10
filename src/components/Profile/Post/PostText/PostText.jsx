import React from "react";
import s from "./PostText.module.css";

const NameUser = (props) => {
  return <a href="#">{props.username}</a>;
};

const MessageUser = (props) => {
  return <p>{props.message}</p>;
};

const LikeUser = (props) => {
  return (
    <div>
      <a href="#">
        <img className={s.like} src="like.png" />
      </a>
      {props.likeCount}
    </div>
  );
};

const PostText = (props) => {
  return (
    <div className={s.post__text}>
      <div className={s.name__user}>
        <NameUser username="Андрей" />
      </div>
      <div className={s.text__user}>
        <MessageUser message="Hi! How are you?" />
      </div>
      <div className={s.post__like}>
        <LikeUser likeCount="14" />
      </div>
    </div>
  );
};

export default PostText;
