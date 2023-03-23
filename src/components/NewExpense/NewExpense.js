import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

export default function NewExpense(props){
  const saveExpenseHandler = (value) => {
    const expenseData = {
      ...value,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseHandler={saveExpenseHandler} />
    </div>
  )
}