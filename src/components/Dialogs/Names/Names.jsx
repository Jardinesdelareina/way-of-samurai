import React from "react";
import s from "./Names.module.scss";
import { NavLink } from "react-router-dom";

const NameItem = (props) => {
  let path = "/dialogs/" + props.name;
  return (
    <NavLink to={path} className={s.names__item}>
      <div className={s.item__ava}></div>
      <div className={s.item__name}>{props.name}</div>
    </NavLink>
  );
};

const Names = (props) => {
  let elementName = props.nameData.map((n) => (
    <NameItem id={n.id} name={n.name} />
  ));
  return <div className={s.names}>{elementName}</div>;
};

export default Names;
