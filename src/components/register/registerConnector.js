import { URL_Register } from '../../constant';
import { FirebaseConnector, FirebaseProvider } from '../../firebase/FirebaseConnector';

const registerHandleSubmit =  async (arrayOfValues, errorSubmitFunction, okSubmitFunction, providerId, token) => {

    let MyproviderId
    if (providerId){
        MyproviderId = providerId;
    }else{
        MyproviderId = FirebaseProvider.DEFAULT;
    }
    let firebaseConnector = new FirebaseConnector({authProvider: MyproviderId});

    if(token){ // Es modificacion de usuario
        await firebaseConnector.setUser({
            Id: arrayOfValues.Id,   // Id of user
            country: arrayOfValues.country,
            lastname: arrayOfValues.lastname,
            message: arrayOfValues.text,
            name: arrayOfValues.name,
            email: arrayOfValues.email,
            username: arrayOfValues.username,
            picture: arrayOfValues.picture,
            pass: arrayOfValues.passwd,
            authCredential: arrayOfValues.authCredential,
        }).then((e) => {
            okSubmitFunction(e)
        }).catch((error) => {
            errorSubmitFunction(error)
        })
    }else{ // Es nuevo usuario
        await firebaseConnector.addUser({
            country: arrayOfValues.country,
            lastname: arrayOfValues.lastname,
            message: arrayOfValues.text,
            name: arrayOfValues.name,
            email: arrayOfValues.email,
            username: arrayOfValues.username,
            picture: arrayOfValues.picture,
            pass: arrayOfValues.passwd,
        }).then((e) => {
            okSubmitFunction(e)
        }).catch((error) => {
            errorSubmitFunction(error)
        })
    }

/*    const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(arrayOfValues)
        };

        fetch(URL_Register, options)
            .then(response => response.json())
            .then(json => {
                let number = Math.random()
                console.log(json, number)
                if(number>0.5){
                    okSubmitFunction(json)
                }else{
                    errorSubmitFunction(json)
                }
                
            }).catch((e)=>{ errorSubmitFunction(e)});*/
}
export { registerHandleSubmit }

 