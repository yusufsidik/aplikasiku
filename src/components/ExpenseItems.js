import "./css/ExpenseItems.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
export default function ExpenseItem({title, price, date}) {
  const [count, setCount] = useState(1);
  const click = () => {
    setCount(count+1);
  }
  return (
    <Card className="expense-item">
      <p>{count}</p>
      <button onClick={() => click()}>tambah</button>
      <ExpenseDate tanggal={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rp.{price}</div>
      </div>
    </Card>
  );
}
