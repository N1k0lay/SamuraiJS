import style from "./Paginator.module.css";
import React from "react";

export const Paginator = ({pageSize, onPageChanged, totalUsersCount, currentPage}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [1, 2, 3, 4, 5];
    pages.push(pagesCount);

    return <div className={style.pagination}>
        {pages.map(p => {
            return <span className={(currentPage === p) ? style.selectedPage : style.unSelectedPage}
                         onClick={(e) => {
                             onPageChanged(p)
                         }}>
                {p}
            </span>
        })}
    </div>
}