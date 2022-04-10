import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form'
import { ValidatorType } from './../../../utils/validators/validators'
import s from './FormsControls.module.scss'

type FormControlPropsType = {
    meta: WrappedFieldMetaProps  // Импорт типов из библиотеки
}

const FormControl: React.FC<FormControlPropsType> = ({ meta: {touched, error}, children }) => {
    const hasError = touched && error  // Если форма была была тронута (touched) и была ошибка, то отобразить div с ошибкой
    return (
        <div className={s.form + " " + (hasError ? s.error : "")}>
            <div>{children}</div>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}

// Отрисовывается FormControl, внутри которого находится children - формы input или textarea со всеми пропсами
// Функции Input и Textarea являются контейнерами для FormControl
// restProps - остаточные пропсы
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props
    return<FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export function createField<FormKeysType extends string>(
    placeholder: string | undefined,
    name: FormKeysType,    // Тип, который определяет ключи какой-либо формы
    validators: Array<ValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {},
    text = ""
) {
    // Важен порядок атрибутов - как обозначены в шаблоне, в таком же порядке должны передаваться и в форме
    <div>
        <Field
            placeholder={placeholder}
            name={name}  // name - атрибут, который передает на сервер свойство как json-объект
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
}

export type GetStringKeys<T> = Extract<keyof T, string>  // Перебирает все ключи (name), которые являются строкой