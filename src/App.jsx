import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SelectDropdown from "./components/SelectDropdown";
import PaginationTest from "./components/PaginationTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      Hello Deevoe
      <SelectDropdown />
      {/* pagination test  */}
      <PaginationTest />
    </div>
  );
}

export default App;
