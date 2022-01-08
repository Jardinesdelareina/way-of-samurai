import React from 'react';
import s from "./Textarea.module.css";

const Textarea = () => {
    return (
        <textarea className={s.form__textarea} placeholder="Напишите" />
    );
};
export default Textarea;