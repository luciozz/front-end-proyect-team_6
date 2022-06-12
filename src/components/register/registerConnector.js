import { URL_Register } from '../../constant';
import { FirebaseConnector } from '../../firebase/FirebaseConnector';

const registerHandleSubmit =  async (arrayOfValues, errorSubmitFunction, okSubmitFunction, providerId) => {

    let firebaseConnector = new FirebaseConnector(providerId);
    
    await firebaseConnector.setUser({
        Id: arrayOfValues.Id,   // Id of user
        country: arrayOfValues.country,
        lastname: arrayOfValues.lastname,
        message: arrayOfValues.text,
        name: arrayOfValues.name,
        email: arrayOfValues.email,
        username: arrayOfValues.username,

    }).then((e) => {
        okSubmitFunction(e)
    }).catch((error) => {
        errorSubmitFunction(error)
    })
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

 