import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./components/Login/Login";

function App() {
  return (
  <BrowserRouter>

    {/* Rutas sin navbar */}
    <Routes>
      <Route index path="/login" element={<Login />} />
    </Routes>

    {/* Rutas con navbar */}
    <NavBar />
    <Routes>
      <Route path="/">
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      </Route>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
