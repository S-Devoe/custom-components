import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SelectDropdown from "./components/SelectDropdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Hello Deevoe World j
      <SelectDropdown />
      Worlfd
    </div>
  );
}

export default App;
