import React from "react";
import s from "./Messages.module.css";
import Form from "../../Profile/Head/Form/Form";

const UserMessage = (props) => {
  return <div className={s.user__text}>{props.text}</div>;
};

const MyMessage = (props) => {
  return <div className={s.my__text}>{props.text}</div>;
};

const Messages = (props) => {
  return (
    <div className={s.dialogs__messages}>
      <div className={s.user__message}>
        <div className={s.user__ava}>
          <img className={s.ava} src="ava.png" />
        </div>
        <UserMessage text="Привет!" />
      </div>
      <div className={s.my__message}>
        <MyMessage text="И тебе привет!" />
        <div className={s.my__ava}>
          <img className={s.ava} src="ava.png" />
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Messages;
