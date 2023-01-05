import "./App.css";
import Create from "./components/Create/create";
import Read from "./components/Read/read";
import Update from "./components/Update/update";
import Menu from "./components/Menu/menu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <Menu />
        <div>
          <Routes>
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes>
            <Route path="/read" element={<Read />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/update" element={<Update />} />
        </Routes>
    </div>
  );
}

export default App;
