import { createContext, useState } from "react";
import "./App.css";
import Data from "./Components/Data";
import Login from "./Components/Login";
import { ListData } from "./data";

export const GLOBAL_DATA = createContext();

function App() {
  const [loginState, setloginState] = useState(false);
  return (
    <GLOBAL_DATA.Provider value={{ loginState, setloginState }}>
      <div className="app">
        {loginState ? <Data data={ListData} /> : <Login />}
      </div>
    </GLOBAL_DATA.Provider>
  );
}

export default App;
