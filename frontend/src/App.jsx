import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Contatti from "./components/Contattami";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar /> {/* navbar normale */}
              <HomePage />
            </>
          }
        />

        <Route
          path="/contatti"
          element={
            <>
              <NavBar fixed="top" /> {/* navbar fissa solo qui */}
              <Contatti />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
