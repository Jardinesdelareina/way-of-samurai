import React from "react";
import { Field, reduxForm } from "redux-form";
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

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  
  let elementPost = props.myPost.map((p) => (
    <PostItem key={p.id} message={p.message} />
  ));
  return (
    <div className={s.profile__post}>
      <AddPostReduxForm onSubmit={addNewPost}/>
      <div>{elementPost}</div>
    </div>
  );
};

const AddPostForm = (props) => {
  return (
    <form className={s.post__form} onSubmit={props.handleSubmit}>
        <Field component="textarea" name="newPostText"/>
        <button>Отправить</button>
      </form>
  )
}

const AddPostReduxForm = reduxForm({ form: "profilePost" })(AddPostForm);

export default Post;
