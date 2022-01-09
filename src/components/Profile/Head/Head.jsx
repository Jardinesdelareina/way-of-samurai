import React from "react";
import s from "./Head.module.css";
import Ava from "./Ava/Ava";
import Description from "./Description/Description";
import Form from "./Form/Form";

const Head = () => {
    return (
      <div className={s.content__head}>
        <Ava/>
        <Description/>
        <Form/>
      </div>
    );
};

export default Head;