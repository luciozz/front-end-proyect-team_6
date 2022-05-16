import React from 'react'
import HomeSections from '../../components/HomeSections/HomeSections'
import { ReactComponent as Logo1 } from '../../images/undraw_hiring_re_yk5n.svg'
import { ReactComponent as Logo2 } from '../../images/undraw_people_re_8spw.svg'
import { ReactComponent as Logo3 } from '../../images/undraw_progressive_app_m-9-ms.svg'
import { ReactComponent as Logo4 } from '../../images/undraw_website_builder_re_ii6e.svg'

import './Home.css'


const Home = () => {

  return (
    <div className="bg-slate-50 min-h-screen dark:bg-gray-800" id="hola">
      <HomeSections svg={<Logo1 className="md:order-2 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Crea tu portfolio" change={false} />
      <HomeSections svg={<Logo4 className="md:order-1 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Personaliza tu perfil" change={true} />
      <HomeSections svg={<Logo2 className="md:order-2 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Comparte con una comunidad de profesionales" change={false} />
      <HomeSections svg={<Logo3 className="md:order-1 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Compatible con todos los dispositivos" change={true} />
    </div>
  )
}

export default Home