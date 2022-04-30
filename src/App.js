import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import configuration from './configuration.js';
import Wordpress from './wordpressApp/wordpress.js';
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import {useState} from 'react';

function App() {
    return (
      <>      
    <div className="App">
      <Profile user={
          {
            name: 'Juan',
            username: 'juanito',
            email: 'adad@gmail.com',
            photo: 'https://picsum.photos/200/300',
        }} />
      <Wordpress wordpressHttp={configuration.wordpressHttp}>
      </Wordpress>
    </div>
    
    </>
  );
}

export default App;


/*
      <header className="App-header">
      </header>
_*/