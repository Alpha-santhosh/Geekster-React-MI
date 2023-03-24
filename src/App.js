import { Route, Routes } from "react-router-dom";
import "./App.css";
import Data from "./Components/Data";
import Login from "./Components/Login";
import { ListData } from "./data";

function App() {
  return (
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/data" element={<Data data={ListData} />} />
        </Routes>
      </div>
  );
}

export default App;
