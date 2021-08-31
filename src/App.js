import './App.css';
import Children from './components/CenteredCard.js'

function App() {
  let name = [1, 2, 3];

  return (
    <div className="App">
      <header className="App-header">
        <Children name = { name.filter((a,b) => b === 0)}/>
        <Children name = { name.filter((a,b) => b === 1)}/>
        <Children name = { name.filter((a,b) => b === 2)}/>
      </header>
    </div>
  );
}

export default App;
