import { connect } from 'react-redux'
import { actions } from '../../../redux/profileReducer'
import { AppStateType } from '../../../redux/reduxStore'
import { getMyPost } from '../../../utils/selectors/profileSelectors'
import Post, { DispatchPropsType, MapPropsType } from './Post'

const mapStateToProps = (state: AppStateType) => ({
    myPost: getMyPost(state),
})
  
const PostContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPost,
    deletePost: actions.deletePost
})(Post)

export default PostContainer