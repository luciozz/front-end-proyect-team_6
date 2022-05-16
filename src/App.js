import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Profile from './components/profile/profile.js';
import Login from './components/login/login.js';
import Register from './components/register/register.js';
import Test from "./components/test/test";
import RecoveryPass from "./components/recoveryPass/recoveryPass.js"

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Register/>}></Route>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/recovery' element={<RecoveryPass/>} />
          <Route path='/test' element={<Test/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

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
export default App;
