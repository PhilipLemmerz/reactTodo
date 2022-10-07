import './App.css';
import Todo from './components/Todo';

// Components in React sind Funktionen die HTML zurückgeben -> Man nennt dies jsx (eine Kombi aus html und js)
function App() {
  return (
    <div>
      <h1> Delete Items </h1>
      <Todo name='fist Item' />
      <Todo name='second Item' />
    </div>
  );
}

export default App;
