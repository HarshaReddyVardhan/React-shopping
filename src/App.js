import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <header className="App">
        <h1> My react App</h1>
      </header>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
