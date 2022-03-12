import { connect } from "react-redux"
import { compose } from "redux"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { addNote } from './../../redux/noteReducer'
import Notebook from './Notebook'

const mapStateToProps = (state) => ({
    noteData: state.notePage.noteData
})

const NotebookContainer = compose(withAuthRedirect, connect(mapStateToProps, { addNote }))(Notebook)

export default NotebookContainer