import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import s from './User.module.scss'
import UserForm from './UserForm'
import Ava from './../../../assets/images/Ava.png'
import UserStatus from './UserStatus'
import Preloader from './../../common/Preloader/Preloader'
import { ContactsType, ProfileType } from '../../../types/types'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const User: React.FC<PropsType> = ({ isOwner, savePhoto, saveProfile, profile, status, updateStatus }) => {
  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      savePhoto(e.target.files[0]);
  }
  }

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false)
      }
    )
  }

  return (
    <div className={s.user}>
      <div className={s.user__about}>
        <UserStatus status={status} updateStatus={updateStatus} /> 
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

type ProfileDataPropsType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const UserData: React.FC<ProfileDataPropsType> = ({ isOwner, profile, goToEditMode }) => {
  
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
          return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]} />
          })}
        </div>
      </div>
    </div>
  )
}

type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}

const Contacts: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b className={s.info__itemContacts}>{contactTitle}: </b>{contactValue}
    </div>
  )
}

export default User
