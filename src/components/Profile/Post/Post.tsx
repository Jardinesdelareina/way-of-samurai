import React from "react"
import { InjectedFormProps, reduxForm } from "redux-form"

import s from "./Post.module.scss"
import { maxLengthCreator, required } from "../../../utils/validators/validators"
import { createField, GetStringKeys, Textarea } from "../../common/FormsControls/FormsControls"
import { MyPostType } from "../../../types/types"

const maxLength = maxLengthCreator(2000)

export type MapPropsType = {
  myPost: Array<MyPostType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
}

type PropsType = {
  message: string
}

export type AddPostFormValuesType = {
  newPostText: string
  message: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const PostItem: React.FC<PropsType> = ({message}) => {
  return (
    <div className={s.post__post}>
      <div className={s.post__ava}></div>
      <div className={s.post__message}>{message}</div>
    </div>
  )
}

const Post: React.FC<MapPropsType & DispatchPropsType> = (props => {

  let addNewPost = (values: AddPostFormValuesType) => {
    props.addPost(values.newPostText)
  }
  
  let elementPost = [...props.myPost].reverse().map((p) => (
    <PostItem key={p.id} message={p.message} />
  ))
  return (
    <div className={s.profile__post}>
      <AddPostReduxForm onSubmit={addNewPost} message={""}/>
      <div>{elementPost}</div>
    </div>
  )
})

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
  return (
    <form className={s.post__form} onSubmit={props.handleSubmit}>
      { createField<AddPostFormValuesTypeKeys>("Напишите сообщение", 'newPostText', [required, maxLength], Textarea) }
      <button type="submit">Отправить</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm<AddPostFormValuesType, PropsType>({ form: "profilePost" })(AddPostForm)

const PostMemo = React.memo(Post)

export default PostMemo
