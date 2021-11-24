import "./App.css";
import { Logo } from "./components/register/styles";
import Routes from "./components/routes";

function App() {
  return (
    <div className="App">
      <Logo>
        <h1>Kenzie</h1>
        <div>
          <h2>Hub</h2>
        </div>
      </Logo>
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}
export default App;
