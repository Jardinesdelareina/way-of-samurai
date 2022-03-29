import React from "react"
import { reduxForm, InjectedFormProps } from "redux-form"
import s from './User.module.scss'
import { createField, GetStringKeys, Input, Textarea } from '../../common/FormsControls/FormsControls'
import { ProfileType } from "../../../types/types"

type PropsType = {
    profile: ProfileType
}
type ProfileTypeKeys = GetStringKeys<ProfileType>

const UserForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {error && <div className={s.user__error}>{error}</div>}
            <div className={s.info__name}><b>Имя: </b>{createField<ProfileTypeKeys>("Имя", "fullName", [], Input)}</div>
            <div className={s.info__item}><b>Ищу работу: </b>{createField<ProfileTypeKeys>("", "lookingForAJob", [], Input, { type: "checkbox" })}</div>
            <div className={s.info__item}><b>Навыки: </b>{createField<ProfileTypeKeys>("Навыки", "lookingForAJobDescription", [], Textarea)}</div>
            <div className={s.info__item}><b>Обо мне: </b>{createField<ProfileTypeKeys>("Обо мне", "aboutMe", [], Textarea)}</div>
            <div className={s.info__item}>{Object.keys(profile.contacts).map(key => {   // Мапит строки json-объекта contacts и выводит их в список
                return <div key={key}><b>{key}: </b>{createField(key, "contacts." + key, [], Input)}</div>
            })}</div>
            <button className={s.user__updateInfo}>Сохранить</button>
        </form>
    )
}

const UserReduxForm = reduxForm<ProfileType, PropsType>({form: "userInfo"})(UserForm)

export default UserReduxForm