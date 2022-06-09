import React from 'react'
import HomeSections from '../../components/HomeSections/HomeSections'
import Svg1 from '../../components/Svgs/Svg1'
import Svg2 from '../../components/Svgs/Svg2'
import Svg3 from '../../components/Svgs/Svg3'
import Svg4 from '../../components/Svgs/Svg4'
import './Home.css'
import ListadoProyectos from "../../components/Proyectos/ListadoProyectos";

const proyects = [{img: "https://mir-s3-cdn-cf.behance.net/projects/404/875f74123548237.Y3JvcCwxOTIwLDE1MDEsMCww.png",
                   title: "TITULO PROYECTO 1",
                   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquasuscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.',
                  link: 'https://www.miproyecto-uno.com'},
                  {img: "https://image.shutterstock.com/image-vector/homepage-concept-teamwork-on-internet-260nw-1323467843.jpg",
                  title: "TITULO PROYECTO 2",
                  description: 'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
                  link: 'https://www.segundoproyecto.com'},
                  {img: "https://cdn.dribbble.com/users/3498270/screenshots/14670728/image__57__4x.png",
                  title: "TITULO PROYECTO 3",
                  description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
                  link: 'https://www.pro-tercero.com'}];

const Home = () => {

  return (
    <div className="bg-slate-50 min-h-screen dark:bg-gray-800 py-5">
      <ListadoProyectos props = {proyects}/>
      <HomeSections svg={<Svg1 />} txt="Crea tu portfolio" change={false} />
      <HomeSections svg={<Svg2 />} txt="Personaliza tu perfil" change={true} />
      <HomeSections svg={<Svg3 />} txt="Comparte con una comunidad de profesionales" change={false} />
      <HomeSections svg={<Svg4 />} txt="Compatible con todos los dispositivos" change={true} />
    </div>
  )
}

export default Home