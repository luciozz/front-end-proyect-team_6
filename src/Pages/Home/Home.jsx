import React from 'react'
import HomeSections from '../../components/HomeSections/HomeSections'
import Svg1 from '../../components/Svgs/Svg1'
import Svg2 from '../../components/Svgs/Svg2'
import Svg3 from '../../components/Svgs/Svg3'
import Svg4 from '../../components/Svgs/Svg4'
import './Home.css'


const Home = () => {

  return (
    <div className="bg-slate-50 min-h-screen dark:bg-gray-800 py-5">
      <HomeSections svg={<Svg1 />} txt="Crea tu portfolio" change={false} />
      <HomeSections svg={<Svg2 />} txt="Personaliza tu perfil" change={true} />
      <HomeSections svg={<Svg3 />} txt="Comparte con una comunidad de profesionales" change={false} />
      <HomeSections svg={<Svg4 />} txt="Compatible con todos los dispositivos" change={true} />
    </div>
  )
}

export default Home