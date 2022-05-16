import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className="flex justify-between bg-orange-600 h-12 items-center dark:bg-gray-900">
      <ul className="navbar-items flex ml-10 gap-x-4">
        <li className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Home</li>
        <li className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Usuarios</li>
        <li className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Dark Mode</li>
        <li className="text-orange-100 px-2 rounded transition duration-500 ease-in-out hover:bg-orange-500 hover:text-orange-50 cursor-pointer dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-orange-500">Idioma</li>
      </ul>
      <div className="mr-10">Mi perfil</div>
    </nav>
    </>
  )
}

export default NavBar