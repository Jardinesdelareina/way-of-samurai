import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageChangeActionCreator,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";


const mapStateToProps = (state) => {
  return {
    messageData: state.dialogsPage.messageData,
    newMessageText: state.dialogsPage.newMessageText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageChangeActionCreator(body));
    }
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps) (Messages);

export default MessagesContainer;
