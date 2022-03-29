import React from 'react'
import s from './Profile.module.scss'
import User from './User/User'
import PostContainer from './Post/PostContainer'
import Preloader from '../common/Preloader/Preloader'
import { ProfileType } from '../../types/types'

type PropsType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = (props) => {
  // Если нет профайла (идет загрузка) показать компонент Прелоадера
  if (!props.profile) {
    return (<Preloader />)
  }

  return (
    <div className={s.profile}>
      <User
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <PostContainer />
    </div>
  )
}

export default Profile