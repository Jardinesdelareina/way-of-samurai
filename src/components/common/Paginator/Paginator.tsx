import React, { useState } from 'react'
import s from './Paginator.module.scss'

import { RightOutlined, LeftOutlined } from '@ant-design/icons'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage?: number
  onPageChanged?: (pageNumber: number) => void
  portionSize?: number
}

const Paginator: React.FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage = 1,
  onPageChanged = x => x,
  portionSize = 10
}) => {
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
        <LeftOutlined onClick={() => { setPortionNumber(portionNumber - 1) }}>Назад</LeftOutlined>
      }
      <div className={s.currentPage}>
        {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
          return (
            <span
              className={currentPage === p && s.selectedPage}
              onClick={() => {onPageChanged(p)}}
            >
              {" " + p + " "}
            </span>
          )
        })}
      </div>
      { portionCount > portionNumber &&
        <RightOutlined onClick={() => { setPortionNumber(portionNumber + 1) }}/>
      }
    </div>
  )
}

export default Paginator