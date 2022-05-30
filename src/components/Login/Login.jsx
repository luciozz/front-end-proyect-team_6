import React from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const username = '';
    const password = '';
    const navigate = useNavigate();

    function handleSubmit(event) {

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

        /*fetch(URL, options)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            });*/

        if (jsonData.username && jsonData.password) {
            console.log(options);

            navigate('/');
            event.preventDefault();
        }

        
            
        event.preventDefault();
    }

    return (
        <div className="bg-slate-50 pt-20 min-h-screen dark:bg-gray-800">
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