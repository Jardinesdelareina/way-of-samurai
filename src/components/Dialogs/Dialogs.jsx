import React from "react";
import s from "./Dialogs.module.css";
import Names from "./Names/Names";
import Messages from "./Messages/Messages";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <Names />
      <Messages />
    </div>
  );
};

export default Dialogs;
