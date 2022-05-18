import { useState } from 'react'
import s from './User.module.scss'
import UserForm from './UserForm'
import Ava from './../../../assets/images/ava.png'
import UserStatus from './UserStatus'
import Preloader from './../../common/Preloader/Preloader'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'


const User = ({ isOwner, savePhoto, saveProfile, profile, status, updateStatus }) => {
  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onUpdatePhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div className={s.user}>
      <div className={s.user__about}>
        <UserStatus isOwner={isOwner} status={status} updateStatus={updateStatus} /> 
      </div>
      <div className={s.user__description}>
        <div className={s.user__ava}>
          <img src={profile.photos.large || Ava} alt="" />
        </div>
        <div className={s.user__buttons}>
          {isOwner && <label><div className={s.downloadAva}>Загрузить фото</div><input type="file" onChange={onUpdatePhoto} /></label>}
          {editMode
            ? <UserForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <UserData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />
          }
        </div>
      </div>
    </div>
  )
}

const UserData = ({ isOwner, profile, goToEditMode }) => {
  
  return (
    <div>
      {isOwner && <button className={s.user__updateInfo} onClick={goToEditMode}>Изменить профиль</button>}
      <div className={s.user__info}>
        <div className={s.info__name}>{profile.fullName}</div>
        <div className={s.info__item}><b>Ищу работу: </b>{profile.lookingForAJob ? <CheckOutlined /> : <CloseOutlined />}</div>
        <div className={s.info__item}><b>Навыки: </b>{profile.lookingForAJobDescription ? profile.lookingForAJobDescription : <CloseOutlined />}</div>
        <div className={s.info__item}><b>Обо мне: </b>{profile.aboutMe}</div>
        <div className={s.info__item}>
          {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
          })}
        </div>
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b className={s.info__itemContacts}>{contactTitle}: </b>{contactValue}
    </div>
  )
}

export default User
