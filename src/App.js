import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Login from './components/Login/Login.jsx';
import Profile from "./components/profile/profile.js";
import Register from "./components/register/register.js";
import Test from "./components/test/test";
import SetUpProyectos from "./SetUp/setUpProyectos";
import RecoveryPass from "./components/recoveryPass/recoveryPass.js";
import Error from "./Pages/Error/Error";
import Footer from "./components/footer/Footer";

import FrontEndState from "./components/Context/FrontEndState";

function App() {
  return (
    <FrontEndState>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="recovery" element={<RecoveryPass />} />
          <Route path="test" element={<Test />} />
          <Route path="setup" element={<SetUpProyectos />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </FrontEndState>
  );
}

export default App;
