import React from "react";
import s from "./Post.module.scss";

const PostItem = (props) => {
  return (
    <div className={s.post__post}>
      <div className={s.post__ava}></div>
      <div className={s.post__message}>{props.message}</div>
    </div>
  );
};

const Post = (props) => {

  let newElementPost = React.createRef();
  
  let addPost = () => { 
    props.addPost();
  }
  
  let onPostChange = () => {
    let text = newElementPost.current.value;
    props.updateNewPostText(text);
  }
  
  let elementPost = props.myPost.map((p) => (
    <PostItem id={p.id} message={p.message} />
  ));
  return (
    <div className={s.profile__post}>
      <div className={s.post__form}>
        <textarea
          ref={newElementPost}
          onChange={onPostChange}
          value={props.newPostText}
        />
        <button onClick={addPost}>Отправить</button>
      </div>
      <div>{elementPost}</div>
    </div>
  );
};

export default Post;
