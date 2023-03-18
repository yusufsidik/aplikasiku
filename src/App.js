import Expenses from "./components/Expenses";
import Clock from "./components/Clock";
import Card from "./components/Card";
function App() {
  const expenses = [
    {id: 1,title: "Car Insurance 1", price: 500000, date: new Date()},
    {id: 2,title: "Car Insurance 2", price: 510000, date: new Date()},
    {id: 3,title: "Car Insurance 3", price: 520000, date: new Date()},
    {id: 4,title: "Car Insurance 4", price: 530000, date: new Date()}
  ]
  return ( 
    <Card className="App">
      <h1>Let's Get Started</h1>
      <Clock />
      <Expenses expenses={expenses}/>
    </Card>
  );
}

export default App;