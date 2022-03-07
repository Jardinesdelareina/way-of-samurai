import React, { useState } from "react"
import cn from "classnames";

import s from "./Paginator.module.scss"

type PropsType = {
  totalUsersCount: number,
  pageSize: number,
  currentPage: number,
  onPageChanged: (pageNumber: number) => void,
  portionSize?: number
}

let Paginator: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)

  let pages: Array<number> = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize

  return (
    <div className={s.paginator}>
      { portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Назад</button>
      }
      <div className={s.currentPage}>
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
          return (
            <span className={cn({ [s.selectedPage]: currentPage === p }, s.pageNumber)}
              onClick={() => { onPageChanged(p) }}>
              {" " + p + " "}
            </span>
          )
        })}
      </div>
      { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Вперед</button>
      }
    </div>
  )
}

export default Paginator
