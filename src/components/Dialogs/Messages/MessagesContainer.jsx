import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageChangeActionCreator,
} from "../../../redux/dialogsReducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageChangeActionCreator(body));
  };

  return (
    <Messages
      addMessage={addMessage}
      updateNewMessageBody={onMessageChange}
      messageData={state.dialogsPage.messageData}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default MessagesContainer;
