import React from "react";
import s from "./UserStatus.module.scss";

class UserStatus extends React.Component {
  state = {
    editMode: true
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div className={s.status}>
        {!this.state.editMode &&
          <div className={s.status__text} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</div>
        }
        {this.state.editMode &&
          <div className={s.status__input}>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status} />
          </div>
        }
      </div>
    );
  }
}

export default UserStatus;