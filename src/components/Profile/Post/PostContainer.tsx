import { connect } from 'react-redux'
import { compose } from 'redux'
import { getMyPost } from './../../../utils/selectors/profileSelectors'
import { addPost, deletePost } from './../../../redux/profileReducer'
import Post, { DispatchPropsType, MapPropsType } from './Post'
import { AppStateType } from '../../../redux/reduxStore'

const mapStateToProps = (state: AppStateType) => ({
    myPost: getMyPost(state),
})

export default compose<MapPropsType, DispatchPropsType, {}, AppStateType>(connect(mapStateToProps, {addPost, deletePost})) (Post)
