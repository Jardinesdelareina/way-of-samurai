import React from "react";
import s from "./Dialogs.module.scss";
import Names from "./Names/Names";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <Names nameData={props.dialogsPage.nameData} />
      <Messages
        messageData={props.dialogsPage.messageData}
        newMessageText={props.dialogsPage.newMessageText}
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default Dialogs;