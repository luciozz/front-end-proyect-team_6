import {proyectos} from './proyectos.js';
import {FirebaseConnector, FirebaseProvider} from '../firebase/FirebaseConnector.js';

export default function SetUpProyectos(props){
    let myProyects = proyectos;

    let firebaseConnector = new FirebaseConnector({authProvider: FirebaseProvider.DEFAULT});
    let message = 'Procesados:'
    try{
        myProyects.forEach(async (proyect) => {
            firebaseConnector.setProject(proyect)
            message = message+' '+proyect.title+' // '
        })
    }  catch(error){
        console.log(error)
    }

    return(
        <div>
            {message}
        </div>
    )
}
