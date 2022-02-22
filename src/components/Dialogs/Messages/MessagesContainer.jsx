import { connect } from "react-redux";
import {
  addMessage
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";


const mapStateToProps = (state) => {
  return {
    messageData: state.dialogsPage.messageData
  }
};

const MessagesContainer = connect(mapStateToProps, {addMessage}) (Messages);

export default MessagesContainer;
