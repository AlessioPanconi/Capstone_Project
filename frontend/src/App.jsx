import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Informazioni from "./components/Informazioni";
import Servizi from "./components/Servizi";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Servizi" element={<Servizi />} />
        <Route path="/Informazioni" element={<Informazioni />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
