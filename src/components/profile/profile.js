// Componente de perfil de usuario que maneja la informacion del usuario
// Como por ejemplo: Nombre/Username, Foto de perfil, email, etc.

import React from 'react';
import './profile.css';
import { ProfilePicture } from '../utils/forms';
import { Redirect } from 'react-router';
import { FrontEndContext } from '../Context/FrontEndContext.js';
import { Navigate } from "react-router-dom";

export default class Profile extends React.Component {
   state = {user: {}};

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: '',
                username: '',
                email: '', 
                photo: '',
                phone: '',
                providerID:'',
                token: '', 
            }
        }
    }
    
    componentDidMount() {
        /*this.setState({
        user: this.props.user,
        });
        // Que pasaria si el fetch no funciona? o tarda mucho?
        fetch('https://jsonplaceholder.typicode.com/users/5')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    user: {
                        name: json.name,
                        username: json.username,
                        email: json.email, 
                        photo: "https://picsum.photos/200/300", //this.props.user.photo // No uso photo del JSON
                        phone: "+555-9999-2222"
                    }
                })
            })*/
    }

    hasUser (Status){
        if(Status.userDarkMode.user.accessToken !== this.state.user.token){
            this.setState({ 
                user: {
                    name: Status.userDarkMode.user.displayName,
                    username: Status.userDarkMode.user.username,
                    email: Status.userDarkMode.user.email,
                    photo: '',
                    providerID: Status.userDarkMode.user.providerId,
                    token: Status.userDarkMode.user.accessToken,
                },
            }
            )
        }; 
        console.log(Status.userDarkMode);
    }
    
    render() {

        return (
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
            <FrontEndContext.Consumer>
            {(Status) => {
                if(!Status.userDarkMode){
                    return (<Navigate to="/login" replace={true} />)
                }
						this.hasUser(Status) 
					}}
            </FrontEndContext.Consumer>
                <div className="grid grid-cols-2 gap-4 w-1/2">
                <div className="col-span-1">

                    <ProfilePicture></ProfilePicture>
                </div>
                <div className="fcol-span-1">
                    <div className="profile-header-info-name">
                    {this.state.user.name}
                    </div>
                    <div className="profile-header-info-username">
                    {this.state.user.username}
                    </div>
                    <div className="profile-body-info-email">
                    {this.state.user.email}
                    </div>
                    <div className="profile-body-info-phone">
                    {this.state.user.phone}
                    </div>
                </div>
                </div>
                <div className="">
                    {this.state.user.providerID}
                </div>
            </div>
       
        );
    }
}
