import React from "react";
import s from "./Dialogs.module.scss";
import MessagesContainer from "./Messages/MessagesContainer";
import NamesContainer from "./Names/NamesContainer";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <NamesContainer store={props.store} />
      <MessagesContainer store={props.store} />
    </div>
  );
};

export default Dialogs;