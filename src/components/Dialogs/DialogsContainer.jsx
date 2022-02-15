import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

class DialogsContainer extends React.Component {

    render() {
        return (<Dialogs />)
  }
}

let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
});

export default compose( withAuthRedirect, connect(mapStateToProps))(DialogsContainer);