import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
    {id: "e1",title: "Car Insurance 1", price: 500000, date: new Date()},
    {id: "e2",title: "Car Insurance 2", price: 510000, date: new Date()},
    {id: "e3",title: "Car Insurance 3", price: 520000, date: new Date()},
    {id: "e4",title: "Car Insurance 4", price: 530000, date: new Date()}
  ]
  return ( 
    <div className="App">
      <h1>Let's Get Started</h1>
      <ExpenseItems 
        title={expenses[0].title} 
        price={expenses[0].price} 
        date={expenses[0].date} 
      />
      <ExpenseItems 
        title={expenses[1].title} 
        price={expenses[1].price} 
        date={expenses[1].date} 
      />
    </div>
  );
}

export default App;