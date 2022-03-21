import s from './Profile.module.scss'
import User from './User/User'
import PostContainer from './Post/PostContainer'
import Preloader from '../common/Preloader/Preloader'

const Profile = (props) => {

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