import React from "react";
import s from "./PostText.module.css";

const MessageUser = (props) => {
  return <p>{props.message}</p>;
};

const PostText = (props) => {
  let myPost = [
    {
      id: "1",
      message: "Hi! How are you?",
      likeCount: "14",
    },
    {
      id: "2",
      message: "Todo esta bien",
      likeCount: "14",
    },
    {
      id: "3",
      message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt laboriosam consequatur cum modi veritatis libero molestiae pariatur veniam, non cupiditate voluptatem quaerat minima harum totam quos quidem vero laudantium ullam!",
      likeCount: "2",
    },
  ];

  let postElement = myPost.map((p) => {
    return (
      <div className={s.post__container}>
        <div className={s.post__ava}>
          <img className={s.ava__user} src="ava.png" />
        </div>
        <div className={s.post__user}>
          <MessageUser message={p.message} likeCount={p.likeCount} />
        </div>
      </div>
    );
  });

  return <div className={s.post__text}>{postElement}</div>;
};

export default PostText;
