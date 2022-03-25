import { connect } from 'react-redux'
import { compose } from 'redux'
import { addPost, deletePost } from './../../../redux/profileReducer'
import Post from './Post'

const mapStateToProps = (state) => ({
    myPost: state.profilePage.myPost
})

export default compose(connect(mapStateToProps, {addPost, deletePost})) (Post)
