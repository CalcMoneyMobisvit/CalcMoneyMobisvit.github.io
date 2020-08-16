import React from "react";
import HistorItem from './HistoryItem';
import HistoryItem from "./HistoryItem";
const History = () => {
   return (

      <section className="history">
         <h3>История расходов</h3>
         <ul className="history__list">
            <HistoryItem />
         </ul>
      </section>

   )
}

export default History;