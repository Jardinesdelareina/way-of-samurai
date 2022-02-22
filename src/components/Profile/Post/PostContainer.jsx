import { connect } from "react-redux";
import {
  addPost
} from "./../../../redux/profileReducer";
import Post from "./Post";

const mapStateToProps = (state) => {
  return {
    myPost: state.profilePage.myPost
  }
}

const PostContainer = connect(mapStateToProps, {addPost}) (Post)

export default PostContainer;
