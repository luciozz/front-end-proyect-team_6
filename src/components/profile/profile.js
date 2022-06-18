// Componente de perfil de usuario que maneja la informacion del usuario
// Como por ejemplo: Nombre/Username, Foto de perfil, email, etc.

import React from 'react';
import './profile.css';
import { ProfilePicture } from '../utils/forms';
import FrontEndStateConsumer from '../Context/FrontEndStateConsumer.js';
import { validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateInputPass, validateEqual, TextTitle, ModalWindow } from '../utils/forms';
import { languages } from "../../language";
import { Navigate  } from "react-router-dom";

let myLanguaje = 'en'
let myTheme = 'dark'

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
                providerId:'',
                token: '', 
            }
        }
    }
    
    componentDidMount() {
        if(this.globalStateUser.accessToken !== this.state.user.token){
        this.setState({ 
                user: {
                    name: this.globalStateUser.name,
                    lastname: this.globalStateUser.lastname,
                    username: this.globalStateUser.username,
                    email: this.globalStateUser.email,
                    message: this.globalStateUser.message,
                    picture: this.globalStateUser.picture,
                    country: this.globalStateUser.country,
                    providerId: this.globalStateUser.providerId,
                    token: this.globalStateUser.accessToken,
                    Id: this.globalStateUser.Id,
                },
            }
            )
        }
    }

    hasUser (state){
        if(state.globalState.user.accessToken !== this.state.user.token){
            this.globalStateUser = state.globalState.user
        }; 
        console.log(state.userDarkMode);
    }

    edit(){
        //this.history.push('/register')
        this.setState({goToEdit: true})
        
    }
    
    render() {
        if (this.state.goToEdit){
            return <Navigate to="/register"/>
        }else return (
            <FrontEndStateConsumer receiveState={this.hasUser.bind(this)} condition={false} pathOut="/login">
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
                <div className="grid grid-cols-2 gap-4 w-1/2">
                <div className="col-span-1">

                    <ProfilePicture src={this.state.user.picture}></ProfilePicture>
                    <div className="profile-body-info-message  dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.INPUT_OTHER}: <span className="font-bold">{this.state.user.message}</span>
                    </div>
                </div>
                <div className="fcol-span-1">
                    <div className="profile-header-info-username dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.INPUT_USERNAME}: <span className="font-bold">{this.state.user.username}</span>
                    </div>
                    <div className="profile-header-info-name dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.INPUT_NAME}: <span className="font-bold">{this.state.user.name}</span>
                    </div>
                    <div className="profile-header-info-lastname dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.INPUT_LASTNAME}: <span className="font-bold">{this.state.user.lastname}</span>
                    </div>
                    <div className="profile-body-info-email dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.INPUT_EMAIL}: <span className="font-bold">{this.state.user.email}</span>
                    </div>
                    <div className="profile-header-info-country dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.COUNTRY}: <span className="font-bold">{this.state.user.country}</span>
                    </div>
                    <div className=" dark:text-slate-50">
                    {languages[myLanguaje].PROFILE.PROVIDERID}: <span className="font-bold  dark:text-slate-50">{this.state.user.providerId}</span>
                </div>    
                </div>
                </div>
                
                <ButtonSubmit functionActionSubmit={this.edit.bind(this)} title={languages[myLanguaje].PROFILE.TEXT_EDIT}></ButtonSubmit>
            </div>

            </FrontEndStateConsumer>
        );
    }
}
