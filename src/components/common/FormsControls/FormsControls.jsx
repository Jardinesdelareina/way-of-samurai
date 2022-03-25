import { Field } from 'redux-form'
import s from './FormsControls.module.scss'

const FormControl = ({ input, meta: {touched, error}, child, ...props }) => {
    const hasError = touched && error
    return (
        <div className={s.form + " " + (hasError ? s.error : "")}>
            <div>{props.children}</div>
            <div>{hasError && <span>{error}</span>}</div>
        </div>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return<FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (

    // name - атрибут, который передает на сервер свойство как json-объект
    // Важен порядок атрибутов - как обозначены в шаблоне, в таком же порядке должны передаваться и в форме
    <div>
        <Field
            placeholder={placeholder}
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)