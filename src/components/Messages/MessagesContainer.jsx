import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from './../../hoc/withAuthRedirect'
import { addMessage } from './../../redux/messagesReducer'
import Messages from './Messages'


const mapStateToProps = (state) => ({
    messageData: state.messagesPage.messageData
})

const MessagesContainer = compose(withAuthRedirect, connect(mapStateToProps, {addMessage})) (Messages)

export default MessagesContainer
