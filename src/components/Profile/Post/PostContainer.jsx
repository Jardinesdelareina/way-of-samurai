import { connect } from 'react-redux'
import { compose } from 'redux'
import { getMyPost } from '../../../utils/selectors/profileSelectors'
import { addPost, deletePost } from './../../../redux/profileReducer'
import Post from './Post'

const mapStateToProps = (state) => ({
    myPost: getMyPost(state),
})

export default compose(connect(mapStateToProps, {addPost, deletePost})) (Post)
