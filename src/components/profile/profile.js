// Componente de perfil de usuario que maneja la informacion del usuario
// Como por ejemplo: Nombre/Username, Foto de perfil, email, etc.

import React from 'react';
import './profile.css';
import { ProfilePicture } from '../utils/forms';

export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                user: {
                    name: '',
                    username: '',
                    email: '',
                    photo: '',
                },
        };
    }
    
    componentDidMount() {
        /*this.setState({
        user: this.props.user,
        });*/
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
            })
    }
    
    render() {
        return (
         
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
                <div className="grid grid-cols-2 gap-4 w-1/2">
                <div className="form-group">

                    <ProfilePicture></ProfilePicture>
                </div>
                <div className="form-group ">
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
            </div>
        );
    }
}
