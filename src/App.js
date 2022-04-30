import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile.js';
import configuration from './configuration.js';
import Wordpress from './wordpressApp/wordpress.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from 'react-bootstrap';

import React from 'react';
import {useState} from 'react';

function App() {
  const [show, setShow] = useState(true);
    return (
      <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    
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