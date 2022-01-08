import React from "react";
import s from "./PostAva.module.css";

const PostAva = () => {
  return (
    <div className={s.post__ava}>
      <img className={s.ava__user} src="ava.png"/>
    </div>
  );
};

export default PostAva;