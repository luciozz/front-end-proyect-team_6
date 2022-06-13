import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";

import Login from './components/Login/Login.jsx';
import Profile from "./components/profile/profile.js";
import Register from "./components/register/register.js";
import Test from "./components/test/test";
import RecoveryPass from "./components/recoveryPass/recoveryPass.js";
import Error from "./Pages/Error/Error";
import Footer from "./components/footer/Footer";

import FrontEndState from "./components/Context/FrontEndState";

/*
<Login></Login>
<span>Hola Esto es otro componente</span>
<Profile user={
    {
      name: 'Juan',
      username: 'juanito',
      email: 'adad@gmail.com',
      photo: 'https://picsum.photos/200/300',
  }} />
*/

function App() {
  return (
    <FrontEndState>
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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </FrontEndState>
  );
}

export default App;
