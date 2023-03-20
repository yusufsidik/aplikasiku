import "./css/ExpenseItems.css"
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
export default function ExpenseItem({title, price, date}) {
  const [count, setCount] = useState(1);
  const [judul, setJudul] = useState(title);
  const click = () => {
    setCount(count+1);
  }

  const changeJudul = () => setJudul(`${judul} - ini dirubah`);
  return (
    <Card className="expense-item">
      <p>{count}</p>
      <button onClick={() => click()}>tambah</button>
      <button onClick={changeJudul}>Ubah Title</button>
      <ExpenseDate tanggal={date} />
      <div className="expense-item__description">
        <h2>{judul}</h2>
        <div className="expense-item__price">Rp.{price}</div>
      </div>
    </Card>
  );
}
