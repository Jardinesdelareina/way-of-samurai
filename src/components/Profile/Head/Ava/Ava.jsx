import React from "react";
import s from "./Ava.module.css";

const Ava = () => {
    return (
      <div className={s.content__ava}>
        <img className={s.ava} src="ava.png" />
      </div>
    );
};

export default Ava;