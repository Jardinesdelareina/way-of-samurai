import React from "react";
import s from "./Messages.module.scss";

const MessageItem = (props) => {
  return (
    <div className={s.messages__posts}>
      <div className={s.myPost}>
        <div className={s.my__ava}></div>
        <div className={s.my__text}>{props.message}</div>
      </div>
    </div>
  );
};

const Messages = (props) => {

  let newElementMessage = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  }
  let onMessageChange = () => {
    let body = newElementMessage.current.value;
    props.updateNewMessageBody(body);
  }

  let elementMessage = props.messageData.map((m) => (
    <MessageItem key={m.id} message={m.message} />
  ));
  return (
    <div className={s.messages}>
      {elementMessage}
      <div className={s.messages__form}>
        <textarea
          ref={newElementMessage}
          onChange={onMessageChange}
          value={props.newMessageText}
        />
        <button onClick={onAddMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Messages;