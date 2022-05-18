import React from 'react'
import { reduxForm, reset } from 'redux-form'
import s from './Post.module.scss'
import { maxLengthCreator, required } from './../../../utils/validators/validators'
import { Textarea, createField } from './../../common/FormsControls/FormsControls'

import { CloseOutlined } from '@ant-design/icons'

const PostItem = (props) => {
  return (
    <div className={s.post__post}>
      <div className={s.post__message}>
        {props.message}
      </div>
      <CloseOutlined className={s.post__delete} />
    </div>
  )
}

const Post = React.memo(props => {

  let addNewPost = (values, dispatch) => {
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
      <AddPostReduxForm onSubmit={addNewPost} />
      <div>{elementPost}</div>
    </div>
  )
})

const maxLength = maxLengthCreator(2000)

const AddPostForm = ({ handleSubmit}) => {
  return (
    <form className={s.post__form} onSubmit={handleSubmit} >
      {createField("Ваш пост", "newPostText", [required, maxLength], Textarea)}
      <button>Отправить</button>
    </form>
  )
}

const AddPostReduxForm = reduxForm({ form: "post" })(AddPostForm)

export default Post