import React from 'react'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from './../common/FormsControls/FormsControls'
import s from './Messages.module.scss'

const maxLength = maxLengthCreator(100)

const MessageItem = (props) => {
  return (
    <div className={s.messages__posts}>
      <div className={s.myPost}>
        <div className={s.my__ava}></div>
        <div className={s.my__text}>{props.message}</div>
      </div>
    </div>
  )
}

const Messages = React.memo(props => {

  let addNewMessage = (values) => {
    props.addMessage(values.newMessageBody)
  }

  let elementMessage = props.messageData.map((m) => (
    <MessageItem key={m.id} message={m.message} />
  ))

  return (
    <div className={s.messages}>
      {elementMessage}
      <AddMessageReduxForm onSubmit={addNewMessage}/>
    </div>
  )
})

const AddMessageForm = (props) => {
  return (
    <div>
      <form className={s.messages__form} onSubmit={props.handleSubmit}>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="Напишите сообщение"
          validate={[required, maxLength]}
        />
        <button>Отправить</button>
      </form>
    </div>
  )
}

const AddMessageReduxForm = reduxForm({ form: "messages" })(AddMessageForm)

export default Messages