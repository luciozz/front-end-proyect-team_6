import { URL_RecoveryPass } from '../../constant';
import { FirebaseConnector, FirebaseProvider } from '../../firebase/FirebaseConnector';

const recoveryPassHandleSubmit = async (arrayOfValues, errorSubmitFunction, okSubmitFunction) => {

    let myFirebaseConnector = new FirebaseConnector({authProvider: FirebaseProvider.DEFAULT});

    await myFirebaseConnector.resetPassword(arrayOfValues.email)
    .then ((e) => {
            okSubmitFunction(e)
        }).catch ((error) => {
            errorSubmitFunction(error)
        })
    /*
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(arrayOfValues)
        };

        fetch(URL_RecoveryPass, options)
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
        
export { recoveryPassHandleSubmit }

 