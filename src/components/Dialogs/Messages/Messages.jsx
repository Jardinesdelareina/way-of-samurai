import React from "react";
import s from "./Messages.module.css";
import Form from "../../Profile/Head/Form/Form";

const UserMessage = (props) => {
  return (
    <div className={s.user__message}>
      <div className={s.user__ava}>
        <img className={s.ava} src="ava.png" />
      </div>
      <div className={s.user__text}>{props.message}</div>
    </div>
  );
};

const Messages = (props) => {

  let messagesElements = props.messageData.map( dialogMessage =>
    <UserMessage message={dialogMessage.message} id={dialogMessage.id} />
  );

  return (
    <div className={s.dialogs__messages}>
      { messagesElements }
      <Form />
    </div>
  );
};

export default Messages;