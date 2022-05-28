import { URL_Register } from '../../constant';

const registerHandleSubmit = (arrayOfValues, errorSubmitFunction, okSubmitFunction) => {

        const options = {
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
                
            }).catch((e)=>{ errorSubmitFunction(e)});
    }

export { registerHandleSubmit }

 