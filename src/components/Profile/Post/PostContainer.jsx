import React from "react";
import {
  addPostActionCreator,
  updateNewPostChangeActionCreator,
} from "./../../../redux/profileReducer";
import Post from "./Post";

const PostContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostChangeActionCreator(text));
  };

  return (
    <Post
      addPost={addPost}
      updateNewPostText={onPostChange}
      myPost={state.profilePage.myPost}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default PostContainer;
