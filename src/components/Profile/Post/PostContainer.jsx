import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostChangeActionCreator,
} from "./../../../redux/profileReducer";
import Post from "./Post";

const mapStateToProps = (state) => {
  return {
    myPost: state.profilePage.myPost,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostChangeActionCreator(text));
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps) (Post)

export default PostContainer;
