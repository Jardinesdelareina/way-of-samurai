import React from "react";
import s from "./PostText.module.css";

const PostText = () => {
  return (
    <div className={s.post__text}>
      <div className={s.text__user}>Пост пользователя</div>
    </div>
  );
};

export default PostText;