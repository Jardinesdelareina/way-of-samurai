import React from "react";
import Names from "./Names";

const NamesContainer = (props) => {
  let state = props.store.getState();

  return <Names nameData={state.dialogsPage.nameData} />;
};

export default NamesContainer;
