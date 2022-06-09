import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const darkModeSwitcher = () =>{
  const html = document.querySelector('html')
  html.classList.toggle('dark')
}

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
    <nav className="flex justify-between bg-orange-600 h-12 items-center dark:bg-gray-900">
      <div className="navbar-items flex ml-10 gap-x-4">
        <button className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500"><Link to="/">Home</Link></button>
        <button className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Explorar</button>
        <button onClick={darkModeSwitcher} className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Dark Mode</button>
        <button className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Idioma</button>
      </div>
      <div className="mr-10"><button><Link to={isLogin ? "profile" : "login"}>{isLogin ? "Mi perfil" : "Login/Registrarse"}</Link></button></div>
    </nav>
    </>
  )
}

export default NavBar