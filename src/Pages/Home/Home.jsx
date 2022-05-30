import React from 'react'
import HomeSections from '../../components/HomeSections/HomeSections'
import { ReactComponent as Logo1 } from '../../images/undraw_hiring_re_yk5n.svg'
import { ReactComponent as Logo2 } from '../../images/undraw_people_re_8spw.svg'
import { ReactComponent as Logo3 } from '../../images/undraw_progressive_app_m-9-ms.svg'
import { ReactComponent as Logo4 } from '../../images/undraw_website_builder_re_ii6e.svg'
import ListadoProyectos from "../../components/Proyectos/ListadoProyectos";

import './Home.css'

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
    <div className="bg-slate-50 min-h-screen dark:bg-gray-800" id="hola">
      <ListadoProyectos props = {proyects}/>
      <HomeSections svg={<Logo1 className="md:order-2 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Crea tu portfolio" change={false} />
      <HomeSections svg={<Logo4 className="md:order-1 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Personaliza tu perfil" change={true} />
      <HomeSections svg={<Logo2 className="md:order-2 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Comparte con una comunidad de profesionales" change={false} />
      <HomeSections svg={<Logo3 className="md:order-1 w-full hover:scale-125 transition ease-in-out duration-1000"/>} txt="Compatible con todos los dispositivos" change={true} />
    </div>
  )
}

export default Home