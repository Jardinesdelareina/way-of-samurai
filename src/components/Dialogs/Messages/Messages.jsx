import React from "react";
import s from "./Messages.module.scss";

const MessageItem = (props) => {
  return (
    <div className={s.messages__posts}>
      <div className={s.myPost}>
        <div className={s.my__ava}>
          <img src="ava.png" />
        </div>
        <div className={s.my__text}>{props.message}</div>
      </div>
    </div>
  );
};

const Messages = (props) => {
  let elementMessage = props.messageData.map((m) => (
    <MessageItem id={m.id} message={m.message} />
  ));
  return (
    <div className={s.messages}>
      {elementMessage}
      <div className={s.messages__form}>
        <textarea />
        <button>Отправить</button>
      </div>
    </div>
  );
};

export default Messages;
