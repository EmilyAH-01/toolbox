import './App.css';
import Calculator from './pages/Calculator';
import Calendar from './pages/Calendar';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="app">
      <Todo />
      <Calculator />
      <Calendar />
    </div>
  );
}

export default App;
