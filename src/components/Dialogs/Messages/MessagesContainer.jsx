import { connect } from "react-redux";
import {
  addMessage,
  updateNewMessageBody,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";


const mapStateToProps = (state) => {
  return {
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText
  }
};

const MessagesContainer = connect(mapStateToProps, {addMessage, updateNewMessageBody}) (Messages);

export default MessagesContainer;
