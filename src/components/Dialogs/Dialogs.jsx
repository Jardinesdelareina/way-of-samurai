import React from "react";
import s from "./Dialogs.module.css";
import Names from "./Names/Names";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <Names nameData={props.nameData} />
      <Messages messageData={props.messageData} />
    </div>
  );
};

export default Dialogs;
