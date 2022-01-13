import React from "react";
import s from "./Names.module.css";
import { NavLink } from "react-router-dom";

const NameItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <NavLink to={path} className={s.item}>
      <div className={s.dialog__item}>
        <div className={s.user__ava}>
          <img className={s.ava} src="ava.png" />
        </div>
        {props.name}
      </div>
    </NavLink>
  );
};

const Names = (props) => {
  let namesElements = props.nameData.map((dialogName) => (
    <NameItem name={dialogName.name} id={dialogName.id} />
  ));

  return (
    <div className={s.dialogs__names}>
      <div className={s.dialogs__items}>
        <div>{namesElements}</div>
      </div>
    </div>
  );
};

export default Names;
