import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { DarkModeProvider } from "./components/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </DarkModeProvider>
  );
}

export default App;
