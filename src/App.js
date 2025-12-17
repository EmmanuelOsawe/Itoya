import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Equip from "./equipments"; 
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipments.js" element={<Equip />} />
    </Routes>
  );
}

export default App;
