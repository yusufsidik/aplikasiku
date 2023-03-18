import ExpenseItems from "./ExpenseItems";
export default function Expenses({ expenses }) {
  const data = expenses.map((expense) => {
    return <ExpenseItems 
      key={expense.id} 
      title={expense.title} 
      price={expense.price} 
      date={expense.date} 
    />
  });
  return (data);
}
