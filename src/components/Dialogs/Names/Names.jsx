import React from "react";
import s from "./Names.module.css";
import { NavLink } from "react-router-dom";

const Names = (props) => {
    return (
        <div className={s.dialogs__names}>
            <div className={s.dialogs__items}>
                <NameItem name="oleg" id="1" />
                <NameItem name="sereja" id="2" />
                <NameItem name="kolya" id="3" />
                <NameItem name="sasha" id="4" />
                <NameItem name="dima" id="5" />
            </div>
        </div>
    );
};

const NameItem = (props) => {
    return (
        <NavLink to={props.id} className={s.item}>{props.name}</NavLink>
    )
}

export default Names;