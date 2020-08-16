import React from "react";


const HistoryItem = () => {
   return (
      <li className="history__item history__item-plus">Получил зарплату
         <span className="history__money">+30000 ₽</span>
         <button className="history__delete">x</button>
      </li>
   )
}

export default HistoryItem;

{/* <li className="history__item  history__item-minus">Отдал долг
<span className="history__money">-10000 ₽</span>
<button className="history__delete">x</button>
</li> */}