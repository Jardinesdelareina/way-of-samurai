import React from "react"
import { WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form/lib/Field'
import { Field } from "redux-form"

import s from "./FormsControls.module.scss"
import {FieldValidatorType} from "./../../../utils/validators/validators"

type FormControlPropsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children}) => {
    const hasError = touched && error

    return (
        <div className={s.form + " " + (hasError ? s.error : "")}>
            <div>{children}</div>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,
    validators: Array<FieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = ""
) {
    return <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>