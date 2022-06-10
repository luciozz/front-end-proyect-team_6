import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Profile from './components/profile/profile.js';
//import Login from './components/login/login.js';
import Register from './components/register/register.js';
import Test from "./components/test/test";
import RecoveryPass from "./components/recoveryPass/recoveryPass.js"
import Login from './components/login/Login.jsx';

import FrontEndStatus from "./components/Context/FrontEndStatus";

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
  const [user, setUser] = useState(null);	//Estado de usuario
  const [isLogged, setIsLogged] = useState(false);	//Estado de login

  const handleLogin = (user) => {
    setUser(user);
    setIsLogged(true);
  }

  return ( //     <FrontEndStatus>
    <>
  <FrontEndStatus>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login userRegister={handleLogin} />} />
            <Route path='profile' element={<Profile myUser={user} />} />
            <Route path='register' element={<Register myUser={user} />} />
            <Route path='recovery' element={<RecoveryPass myUser={user} />} />
            <Route path='test' element={<Test />} />
          </Route>
        </Routes>
    </FrontEndStatus>
    </>
  );
}

export default App;
