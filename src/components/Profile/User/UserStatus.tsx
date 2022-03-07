import React, { ChangeEvent, useEffect, useState } from "react"
import s from "./UserStatus.module.scss"

type PropsType = {
  status: string,
  updateStatus: (status: string) => void
}

const UserStatus: React.FC<PropsType> = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status] )

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value)
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

export default UserStatus