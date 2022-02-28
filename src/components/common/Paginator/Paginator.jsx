import React from "react";
import s from "./Paginator.module.scss";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 12) {
      pages.push(i);
    }
  }

  return (
    <div className={s.currentPage}>
      {pages.map((page) => {
        return (
          <span
            className={currentPage === page && s.selectedPage}
            onClick={() => {
              onPageChanged(page);
            }}
          >
            {page}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
