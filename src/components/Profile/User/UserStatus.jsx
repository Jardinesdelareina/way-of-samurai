import React, { useEffect, useState } from "react";
import s from "./UserStatus.module.scss";

const UserStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect( () => {
    setStatus(props.status);
  }, [props.status] );

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className={s.status}>
        {!editMode &&
          <div className={s.status__text} onDoubleClick={activateEditMode}>{props.status  || "Статус"}</div>
        }
        {editMode &&
          <div className={s.status__input}>
            <input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true} value={status} />
          </div>
        }
      </div>
  )
}

export default UserStatus;