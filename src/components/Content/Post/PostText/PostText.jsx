import React from "react";
import s from "./PostText.module.css";

const PostText = () => {
  return (
    <div className={s.post__text}>
      <div className={s.name__user}>
        <a href="#">Имя пользователя</a>
      </div>
      <div className={s.text__user}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        dolorum. Aliquid reiciendis dolor ad ipsa consectetur rem debitis
        temporibus quis blanditiis cumque. Necessitatibus reiciendis ab velit
        dolorem deserunt eius vitae!
      </div>
      <div className={s.post__like}>
        <img className={s.like} src="like.png"/>
      </div>
    </div>
  );
};

export default PostText;