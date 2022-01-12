import React from "react";
import s from "./Names.module.css";
import { NavLink } from "react-router-dom";

const NameItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <NavLink to={path} className={s.item}>{props.name}</NavLink>
    );
};

const Names = (props) => {

    let namesElements = props.nameData.map( dialogName => 
        <NameItem name={dialogName.name} id={dialogName.id} />
    );

    return (
        <div className={s.dialogs__names}>
            <div className={s.dialogs__items}>
                { namesElements }
            </div>
        </div>
    );
};

export default Names;