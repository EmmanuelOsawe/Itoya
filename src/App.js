import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Equip from "./equipments"; 
import Contact from "./contact";
import Admin from "./Admin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/equipments" element={<Equip />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
