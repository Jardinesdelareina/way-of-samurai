import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { addMessage } from './../../redux/dialogsReducer'
import Dialogs from './Dialogs'

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

const DialogsContainer = compose(withAuthRedirect, connect(mapStateToProps, {addMessage}))(Dialogs)

export default DialogsContainer