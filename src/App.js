import Expenses from "./components/Expenses";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
function App() {
  const dataExpenses = [
    {id: 1,title: "Car Insurance 1", price: 500000, date: new Date()},
    {id: 2,title: "Car Insurance 2", price: 510000, date: new Date()},
    {id: 3,title: "Car Insurance 3", price: 520000, date: new Date()},
    {id: 4,title: "Car Insurance 4", price: 530000, date: new Date()}
  ];

  const [expenses, setExpenses] = useState(dataExpenses);
  

  const AddExpense = (expense) => {
    setExpenses((prevVal) => {
      return [
        ...prevVal,
        expense
      ]
    });
  }
  console.log(expenses);
  return ( 
    <Card className="App">
      <h1>Let's Get Started</h1>
      <NewExpense onAddExpense={AddExpense}/>
      <Expenses expenses={expenses}/>
    </Card>
  );
}

export default App;