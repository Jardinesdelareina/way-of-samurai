import React from "react";
import s from "./Post.module.scss";

const PostItem = (props) => {
  return (
    <div className={s.post__post}>
      <div className={s.post__ava}>
        <img src="ava.png" />
      </div>
      <div className={s.post__message}>{props.message}</div>
    </div>
  );
};

const Post = (props) => {
  let elementPost = props.myPost.map((p) => (
    <PostItem id={p.id} message={p.message} />
  ));
  return (
    <div className={s.profile__post}>
      <div className={s.post__form}>
        <textarea className={s.form__textarea} placeholder="Напишите..." />
        <button className={s.form__button}>Отправить</button>
      </div>
      <div>{elementPost}</div>
    </div>
  );
};

export default Post;
