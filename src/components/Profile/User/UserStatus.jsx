import React from "react";
import s from "./UserStatus.module.scss";

class UserStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value 
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }
  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode &&
          <div className={s.status__text} onDoubleClick={this.activateEditMode}>{this.props.status || "Статус"}</div>
        }
        {this.state.editMode &&
          <div className={s.status__input}>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        }
      </div>
    );
  }
}

export default UserStatus;