import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, minLengthCreator, required } from '../../utils/validators/validators'
import { Textarea } from '../common/FormsControls/FormsControls'
import s from './Notebook.module.scss'

const maxLength = maxLengthCreator(20)
const minLenght = minLengthCreator(3)

const NoteItem = (props) => {
  return (
    <div className={s.noteList}>{props.note}</div>
  )
}

const Notebook = React.memo(props => {

  let addNewNote = (values) => {
    props.addNote(values.newNote)
  }

  let elementNote = props.noteData.map((n) => (
    <NoteItem key={n.id} note={n.note} />
  ))

  return (
    <div className={s.notebook}>
      <div className={s.newNote}>
        <h1>Notebook</h1>
        <AddNoteReduxForm onSubmit={addNewNote} />
        {elementNote}
      </div>
    </div>
  )
})

const AddNoteForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name="newNote"
        placeholder="Ваша запись"
        validate={[required, maxLength, minLenght]}
      />
      <button>Add Note</button>
    </form>
  )
}

const AddNoteReduxForm = reduxForm({form: "notes" })(AddNoteForm)

export default Notebook