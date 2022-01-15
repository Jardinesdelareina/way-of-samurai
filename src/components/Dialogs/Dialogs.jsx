import React from "react";
import s from "./Dialogs.module.scss";
import Names from "./Names/Names";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <Names nameData={props.state.nameData} />
      <Messages messageData={props.state.messageData} />
    </div>
  );
};

export default Dialogs;