import React from "react";
import s from "./Form.module.css";
import Textarea from "./Textarea/Textarea";
import FormButton from "./FormButton/FormButton";

const Form = () => {
    return (
      <div className={s.post__form}>
        <Textarea/>
        <FormButton/>
      </div>
    );
};

export default Form;