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

  let addMessage = () => {
    props.addMessage();
  }
  let onMessageChange = () => {
    let text = newElementMessage.current.value;
    props.updateNewMessageText(text);
  }

  let elementMessage = props.messageData.map((m) => (
    <MessageItem id={m.id} message={m.message} />
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
        <button onClick={addMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Messages;
