// Componente de perfil de usuario que maneja la informacion del usuario
// Como por ejemplo: Nombre/Username, Foto de perfil, email, etc.

import React from 'react';
import './profile.css';
import { ProfilePicture } from '../utils/forms';
import { Redirect } from 'react-router';
import { FrontEndContext, darkMode, user } from '../Context/FrontEndContext.js';

export default class Profile extends React.Component {
   state = {user: {}};

    constructor(props) {
        super(props);

       
        if(FrontEndContext.user){ 
            this.state = {
                    user: {
                        name: FrontEndContext.user.name,
                        username: FrontEndContext.user.username,
                        email: FrontEndContext.user.email,
                        photo: '',
                        providerID: FrontEndContext.user.providerID,
                        token: FrontEndContext.user.token,
                    },
            };
        }else{
            // Si no hay usuario, navego a login
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
        console.log(Status.user);
    }
    
    render() {

        return (
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
            <FrontEndContext.Consumer>
            {(Status) => (
						this.hasUser(Status)
					)}
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
                    @{this.state.user.username}
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
