import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
} from "./../../../redux/profileReducer";
import Post from "./Post";

const mapStateToProps = (state) => {
  return {
    myPost: state.profilePage.myPost,
    newPostText: state.profilePage.newPostText
  }
}

const PostContainer = connect(mapStateToProps, {addPost, updateNewPostText}) (Post)

export default PostContainer;
