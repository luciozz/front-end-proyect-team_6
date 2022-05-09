import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import Login from './components/login/login.js';
import Register from './components/register/register.js'

function App() {
  return (

    <div className="App">
      <Register></Register>
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
