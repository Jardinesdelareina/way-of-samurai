import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

class DialogsContainer extends React.Component {

    render() {

        if (!this.props.auth) return <Navigate to={"/login"} />
        
        return (<Dialogs />)
  }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(DialogsContainer);