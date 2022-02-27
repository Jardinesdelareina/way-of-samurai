import { connect } from "react-redux";
import {
  addPost, deletePost
} from "./../../../redux/profileReducer";
import Post from "./Post";

const mapStateToProps = (state) => {
  return {
    myPost: state.profilePage.myPost
  }
}

const PostContainer = connect(mapStateToProps, {addPost, deletePost}) (Post)

export default PostContainer;
