import s from './User.module.scss'
import Ava from './../../../assets/images/Ava.png'
import UserStatus from './UserStatus'
import Preloader from '../../common/Preloader/Preloader'

const User = ({ isOwner, savePhoto, profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  const onUpdatePhoto = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={s.user}>
      <div className={s.user__description}>
        <div className={s.user__ava}>
          <img src={profile.photos.large || Ava} alt="" />
          {isOwner && <input type="file" onChange={onUpdatePhoto} />}
        </div>
        <div className={s.user__info}>
          <div className={s.info__name}>{profile.fullName}</div>
          <div className={s.info__twitter}>{profile.contacts.twitter || "twitter: x"}</div>
          <div className={s.info__instagram}>{profile.contacts.instagram || "instagram: x"}</div>
          <div className={s.info__github}>{profile.contacts.github || "github: x"}</div>
        </div>
        <div className={s.user__about}>
          <UserStatus isOwner={isOwner} status={status} updateStatus={updateStatus} /> 
        </div>
      </div>
    </div>
  )
}

export default User
