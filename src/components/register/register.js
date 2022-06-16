import { useRef, useState } from "react";
import { validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateInputPass, validateEqual, TextTitle, ModalWindow } from '../utils/forms';
import { registerHandleSubmit } from "./registerConnector.js";
import { languages } from "../../language";
import { constCountries, classCss } from "../../constant.js"
import './register.css';
import { Navigate } from "react-router-dom";
import FrontEndStateConsumer from '../Context/FrontEndStateConsumer.js';

let myLanguaje = 'en'
let myTheme = 'white'

function Register(props){
    const [defaultValues, setDefaulValues] = useState( {
        name: '..',
        lastname: '..',
        email: 'you@example.com',
        passwd: '**',
        repasswd: '**',
        text: 'Text',
        username: '',
        country: 'AR',
        successRegister: false,
    }) 
    let nameOfElementsArray = {}
    let validateArray = {}
    let valueArray = {}
    let setUser = null

    const addElementToArrayName = (name, title) =>{
        nameOfElementsArray[name] = title
    }

    const setValidates = (name, validate) =>{
        validateArray[name]= (validate===true)? true: false

        if(defaultValues.token){
            if(valueArray[name] === defaultValues[name]){
                validateArray[name]= true
            }
        }
    }

    const setValues = (event) => {
        const name = event.target.name
        valueArray[name] = event.target.value
    }
    
    const refModalWindow = useRef(null);
    const onClickErrroModal = () => {}

    const hasUser = (state) => {
        if(state.globalState.user){
            if(state.globalState.user.accessToken  !== defaultValues.token){
                setDefaulValues( {
                    name: state.globalState.user.name,
                    lastname: state.globalState.user.lastname,
                    email: state.globalState.user.email,
                    passwd: '**',
                    repasswd: '**',
                    username: state.globalState.user.username,
                    text: state.globalState.user.message,
                    country: state.globalState.user.country,
                    picture: state.globalState.user.picture,
                    emailReadOnly: true,
                    providerId: state.globalState.user.providerId,
                    token: state.globalState.user.accessToken,
                    Id: state.globalState.user.ID,
                    authCredential: state.globalState.user.authCredential,
                })
                return true
            }
        }
        setUser = state.toggleGlobalState;
        console.log(state.globalState);
    }

    return (
        <FrontEndStateConsumer receiveState={hasUser} condition={true}>
            {(defaultValues.successRegister)&&(
                <Navigate to="/profile"/>
            )}
        <div className={myTheme}>
            <ModalWindow ref={refModalWindow} setValidate={onClickErrroModal}>
            </ModalWindow>
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
                <div className={classCss.classCssContentDiv}>
                    <TextTitle H="H4">{languages[myLanguaje].REGISTER.HEADING_REGISTER}</TextTitle>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaultValues.username} title={languages[myLanguaje].REGISTER.INPUT_USERNAME} name="username" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    defaultValidate={(defaultValues.token)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaultValues.name} title={languages[myLanguaje].REGISTER.INPUT_NAME} name="name" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    defaultValidate={(defaultValues.token)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaultValues.lastname} title={languages[myLanguaje].REGISTER.INPUT_LASTNAME} name="lastname" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    defaultValidate={(defaultValues.token)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaultValues.email} title={languages[myLanguaje].REGISTER.INPUT_EMAIL} name="email" type="email" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateEmailInput()}
                    defaultValidate={(defaultValues.token)}
                    readOnly={defaultValues.emailReadOnly}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className="grid grid-cols-2 gap-4 w-1/2">
                    <div className='form-group'>
                        <FormInput Id="passOrig" isRequired="true" initialValue={defaultValues.passwd} title={languages[myLanguaje].REGISTER.INPUT_PASS} name="passwd" type="password" 
                        addElementToArrayName={addElementToArrayName}
                        validateFunction={validateInputPass()}
                        defaultValidate={(defaultValues.token)}
                        setValidate={setValidates} setValue={setValues}></FormInput>
                    </div>
                    <div className='form-group'>
                        <FormInput isRequired="true" initialValue={defaultValues.repasswd} title={languages[myLanguaje].REGISTER.INPUT_REPASS} name="repasswd" type="password" 
                        addElementToArrayName={addElementToArrayName}
                        validateFunction={validateEqual("passOrig")}
                        defaultValidate={(defaultValues.token)}
                        setValidate={setValidates} setValue={setValues}></FormInput>
                    </div>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput initialValue={defaultValues.picture} title={languages[myLanguaje].REGISTER.INPUT_PICTURE} name="picture" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput initialValue={defaultValues.text} title={languages[myLanguaje].REGISTER.INPUT_OTHER} name="text" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    setValue={setValues}></FormInput>
                </div>
                <div >
                    <CheckFormDropDown isRequired="true" initialValue={defaultValues.country} title={languages[myLanguaje].REGISTER.INPUT_COUNTRY} name="country"
                    dropText={languages[myLanguaje].REGISTER.SELECT}
                    optionsSelect={constCountries}
                    addElementToArrayName={addElementToArrayName}
                    setValidate={setValidates} setValue={setValues}></CheckFormDropDown>
                </div>
                <div className={classCss.classCssTitleH6}>
                    {languages[myLanguaje].REGISTER.TEXT_REQUIRED_FIELDS}
                </div>
                <div>
                    <ButtonSubmit functionActionSubmit={submit} title={languages[myLanguaje].REGISTER.TEXT_SUBMIT}></ButtonSubmit>
                </div>
            </div>
        </div>
        </FrontEndStateConsumer>
    )

    function submit(){
        // Check validate status of elements
        let errorValidate = ""
        for (const element in validateArray) {
            if(!validateArray[element]){
                errorValidate = errorValidate + nameOfElementsArray[element] + "<br/>"
            }
        }
        if(errorValidate.length>1){
            errorValidate = languages[myLanguaje].REGISTER.ERROR_ITEMS + "<br/>" + errorValidate
            refModalWindow.current.showModalWindow('Error', {__html: errorValidate}, true, 'red')
            return
        }

        // Get values of elements
        try{
            if(defaultValues.Id){ 
                for (const element in defaultValues) {
                    if(!valueArray[element]){
                        valueArray[element] = defaultValues[element]
                    }
                };
                //valueArray["Id"] = defaulValues.Id
            }

            console.log(valueArray)
            if(valueArray.passwd===defaultValues.passwd){valueArray.defaultPasswd = defaultValues.passwd; valueArray.passwd = null; }
            registerHandleSubmit(valueArray, errorSubmit, okSubmit, defaultValues.providerId, defaultValues.token)
        }catch(e){
            refModalWindow.current.showModalWindow(languages[myLanguaje].REGISTER.REGISTRATION_ERROR, {__html: e}, true, 'red')
        }
    }

    function errorSubmit(e){
        //console.log('error submit', e)
        refModalWindow.current.showModalWindow(languages[myLanguaje].REGISTER.REGISTRATION_ERROR, {__html: languages[myLanguaje].REGISTER.ERROR_SUBMIT}, true, 'red')
    }

    function okSubmit(e){
        refModalWindow.current.showModalWindow(languages[myLanguaje].REGISTER.REGISTRATION_COMPLETE, {__html: languages[myLanguaje].REGISTER.OK_SUBMIT}, true)
        if(setUser){ //email: valueArray.email,
            let aUser = {
                name: valueArray.name,
                lastname: valueArray.lastname,
                message: valueArray.text,
                country: valueArray.country,
                picture: valueArray.picture,
                email: valueArray.email,
                username: valueArray.username,
                providerId: valueArray.providerId,
                provider: valueArray.provider,
                accessToken: valueArray.token,
                ID: valueArray.Id,
            }
            if(e){
                aUser.accessToken = e.accessToken
                aUser.ID = e.Id
                aUser.providerId = e.providerId;
            }
            setUser(aUser)
        }
        setDefaulValues({successRegister: true,})
    }
    
}


export default Register