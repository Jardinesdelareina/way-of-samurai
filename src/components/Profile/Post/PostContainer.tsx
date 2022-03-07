import { connect } from "react-redux"

import { actions } from "../../../redux/profileReducer"
import { AppStateType } from "../../../redux/reduxStore"
import Post, { DispatchPropsType, MapPropsType } from "./Post"

const mapStateToProps = (state: AppStateType) => ({
    myPost: state.profilePage.myPost
})

export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(
  mapStateToProps, { addPost: actions.addPost })(Post)
