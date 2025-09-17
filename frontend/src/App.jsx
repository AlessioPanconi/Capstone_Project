import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar>
        <Routes></Routes>
      </NavBar>
    </BrowserRouter>
  );
}

export default App;
