import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./Post.module.scss";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

const PostItem = (props) => {
  return (
    <div className={s.post__post}>
      <div className={s.post__ava}></div>
      <div className={s.post__message}>{props.message}</div>
    </div>
  );
};

const Post = React.memo(props => {

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }
  
  let elementPost = [...props.myPost].reverse().map((p) => (
    <PostItem key={p.id} message={p.message} />
  ));
  return (
    <div className={s.profile__post}>
      <AddPostReduxForm onSubmit={addNewPost}/>
      <div>{elementPost}</div>
    </div>
  );
});

const AddPostForm = (props) => {
  return (
    <form className={s.post__form} onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newPostText"
        placeholder="Напишите сообщение"
        validate={[required, maxLength]}
      />
      <button>Отправить</button>
    </form>
  );
}

const AddPostReduxForm = reduxForm({ form: "profilePost" })(AddPostForm);

export default Post;
