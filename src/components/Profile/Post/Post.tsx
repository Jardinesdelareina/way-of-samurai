import React from 'react'
import { InjectedFormProps, reduxForm, reset } from 'redux-form'
import s from './Post.module.scss'
import { maxLengthCreator, required } from './../../../utils/validators/validators'
import { Textarea, createField, GetStringKeys } from './../../common/FormsControls/FormsControls'
import { PostType } from './../../../types/types'

import { CloseOutlined } from '@ant-design/icons'

export type PropsType = {
  message: string
}

export type MapPropsType = {
  myPost: Array<PostType>
}

export type DispatchPropsType = {
  addPost: (newPostText: string) => void
  deletePost: (postId: number) => void
}

const PostItem: React.FC<PropsType> = (props) => {
  return (
    <div className={s.post__post}>
      <div className={s.post__message}>
        {props.message}
      </div>
      <CloseOutlined className={s.post__delete} />
    </div>
  )
}

export type AddPostFormValuesType = {
  newPostText: string
}

type AddPostFormValuesTypeKeys = GetStringKeys<AddPostFormValuesType>

const Post: React.FC<MapPropsType & DispatchPropsType> = React.memo(props => {

  let addNewPost = (values: AddPostFormValuesType, dispatch: any) => {
    props.addPost(values.newPostText)  // Постит введенный текст
    dispatch(reset("post"))            // Очищает форму после сабмита
  }

  // Массив объектов превращается в массив jsx-элементов
  // reverse инвертирует порядок добавления новых elementPost: новые элементы в начале, старые в конце
  let elementPost = [...props.myPost].reverse().map((p) => (
    <PostItem key={p.id} message={p.message} />
  ))

  return (
    /* Когда форма засабмитится (сработает коллбэк onSubmit={addNewPost}) 
    она получит все данные из этой формы (values), в values находится newPostText - это то, 
    что вводится в textarea или input, и эти данные передаются к addPost, логика которого
    прописана в profileReducer */
    <div className={s.profile__post}>
      <AddPostReduxForm onSubmit={addNewPost} message={''} />
      <div>{elementPost}</div>
    </div>
  )
})

const maxLength = maxLengthCreator(2000)

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = ({ handleSubmit}) => {
  return (
    <form className={s.post__form} onSubmit={handleSubmit} >
      {createField<AddPostFormValuesTypeKeys>("Ваш пост", "newPostText", [required, maxLength], Textarea)}
      <button>Отправить</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm<AddPostFormValuesType, PropsType>({ form: "post" })(AddPostForm)

export default Post