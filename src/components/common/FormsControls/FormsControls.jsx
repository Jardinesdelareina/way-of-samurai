import React from "react";
import s from "./FormsControls.module.scss";

const FormControl = ({ input, meta, chil, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className={s.form + " " + (hasError ? s.error : "")}>
            <div>{props.children}</div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}