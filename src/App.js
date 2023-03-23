import "./App.css";
import Data from "./Components/Data";
import { ListData } from "./data";

function App() {
  return (
    <div className="App">
      <Data data={ListData} />
    </div>
  );
}

export default App;
