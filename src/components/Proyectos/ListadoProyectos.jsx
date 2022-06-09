import React from 'react';


const ListadoProyectos = ({props}) => {

        console.log(props);
        

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8 py-12 lg:mx-12'>
            {props.map( (proyect, i) => {
                return(
                    <div key={i} className="bg-slate-900/10 dark:bg-slate-100/10 mx-auto
                                            md:max-w-md sm:max-w-lg
                                            rounded overflow-hidden shadow-lg">
                        <img className="h-60 w-full" src={`${proyect.img}`} alt="Sunset in the mountains"/>
                        <div className="h-52 px-6 py-4">
                            <div className="font-bold text-xl mb-2">{proyect.title}</div>
                            <p className="text-slate-800 dark:text-slate-50 text-sm">
                                {proyect.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-slate-50 rounded-full px-3 py-1 text-sm font-semibold text-slate-900 mr-2 mb-2">
                                {proyect.link}
                            </span>
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}

export default ListadoProyectos;