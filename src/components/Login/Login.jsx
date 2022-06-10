import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { app } from '../../firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FrontEndContext } from '../Context/FrontEndContext.js';
import  FrontEndStatus from '../Context/FrontEndStatus.js';

const Login = (props) => {
    const username = '';
    const password = '';
    const navigate = useNavigate();
    let setUser = null

    async function handleSubmit(event) {
        event.preventDefault();

        let jsonData = {
            "username": event.target.form[0].value,
            "password": event.target.form[1].value
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
        };

        const auth = getAuth();
        const user = await signInWithEmailAndPassword(auth, event.target.form[0].value, event.target.form[1].value)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            //callBack(user);    
            if (user) {
                console.log(user);
                
                if(setUser){
                    setUser(user)
                }

                
                navigate('/profile');
                
            }        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
        /*fetch(URL, options)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            });*/
    }

    const hasUser = (Status)  => {
        setUser = Status.toggleFrontEndContext;
        console.log(Status.userDarkMode.user);
    }
    return (
        <div className="bg-slate-50 pt-20 min-h-screen dark:bg-gray-800">
            <FrontEndContext.Consumer>
          
            {(Status) => {
						hasUser(Status)
                        if(Status.userDarkMode.user){
                            return (<Navigate to="/profile" replace={true} />)
                        }
                    }}
          
            </FrontEndContext.Consumer>
        <div className="bg-slate-white dark:bg-slate-50 justify-center content-center mx-auto w-80 h-96 border-2 rounded-md">
            <h1 className="w-full text-center mt-5 mb-16">LogIn</h1>
            <form>
                <div className="grid grid-cols-1 gap-6">
                    <div className="ml-6 grid grid-cols-1 gap-2">
                        <label className="w-full">Username</label>
                        <input className="w-64 h-8 p-2 border border-slate-300"
                            {...username}
                            type="text"
                            name="username"/>
                    </div>
                    <div className="ml-6 grid grid-cols-1 gap-2">
                        <label className="input-label">Password</label>
                        <input className="w-64 h-8 p-2 border border-slate-300"
                            {...password}
                            type="password"
                            name="password"/>
                    </div>
                    <button className="my-2 mx-auto w-64 h-8 text-sm font-medium rounded-md text-white bg-slate-600"
                            onClick={handleSubmit}>
                                Ingresar
                    </button>
                </div>
                <div className="text-sm text-center">
                    <a href="/recovery" className="font-medium text-slate-600 hover:text-slate-500">¿Olvidaste tu contraseña?</a>
                </div>
            </form>
        </div>
        </div>


    );

}

export default Login;