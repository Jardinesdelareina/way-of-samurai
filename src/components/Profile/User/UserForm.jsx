import { reduxForm } from "redux-form"
import s from './User.module.scss'
import { createField, Input, Textarea } from './../../common/FormsControls/FormsControls'

const UserForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={s.user__error}>{error}</div>}
            <div className={s.info__name}><b>Имя: </b>{createField("Имя", "fullName", [], Input)}</div>
            <div className={s.info__item}><b>Ищу работу: </b>{createField("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
            <div className={s.info__item}><b>Навыки: </b>{createField("Навыки", "lookingForAJobDescription", [], Textarea)}</div>
            <div className={s.info__item}><b>Обо мне: </b>{createField("Обо мне", "aboutMe", [], Textarea)}</div>
            <div className={s.info__item}>{Object.keys(profile.contacts).map(key => {   // Мапит строки json-объекта contacts и выводит их в список
                return <div key={key}><b>{key}: </b>{createField(key, "contacts." + key, [], Input)}</div>
            })}</div>
            <button className={s.user__updateInfo}>Сохранить</button>
        </form>
    )
}

const UserReduxForm = reduxForm({form: "userInfo"})(UserForm)

export default UserReduxForm