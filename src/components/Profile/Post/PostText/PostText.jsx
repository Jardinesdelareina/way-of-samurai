import React from "react";
import s from "./PostText.module.css";

const PostText = (props) => {
  return (
    <div className={s.post__text}>
      <div className={s.name__user}>
        <a href="#">Имя пользователя</a>
      </div>
      <div className={s.text__user}>
        {props.message}
      </div>
      <div className={s.post__like}>
        <a href="#"><img className={s.like} src="like.png" /></a> {props.likeCount}
      </div>
    </div>
  );
};

export default PostText;