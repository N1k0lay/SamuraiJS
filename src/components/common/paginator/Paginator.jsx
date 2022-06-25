import style from "./Paginator.module.css";
import React, {useEffect, useState} from "react";
import cn from "classnames";

export const Paginator = ({pageSize, onPageChanged, totalItemsCount, currentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize); //Количество страниц

    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCounter = Math.ceil(pagesCount / portionSize); //Количество "порций"
    let [portionNumber, setPortionNumber] = useState(1); //portionNumber - выбранная порция; setPortionNumber - текущая порция
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    return <div className={style.pagination}>

        {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Prev</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <span className={cn({
                    [style.selectedPage]: currentPage === p,
                    [style.unSelectedPage]: currentPage !== p,
                })

                }
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>
                {p}</span>
            })}
        {portionCounter > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> NEXT </button>}
    </div>

}

// <span className={ cn({
//                     [style.selectedPage]: currentPage === p
//                 }, style.unSelectedPage) }
//                              key={p}
//                              onClick={(e) => {
//                                  onPageChanged(p);
//                              }}>
//                 {p}</span>


// let pages = [1, 2, 3, 4, 5];
// pages.push(pagesCount);
//
// return <div className={style.pagination}>
//     {pages.map(p => {
//         return <span key={currentPage} className={(currentPage === p) ? style.selectedPage : style.unSelectedPage}
//                      onClick={(e) => {
//                          onPageChanged(p)
//                      }}>
//             {p}
//         </span>
//     })}
// </div>