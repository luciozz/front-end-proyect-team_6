import { useRef, useState } from "react";
import { validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateInputPass, validateEqual, TextTitle, ModalWindow } from '../utils/forms';
import { registerHandleSubmit } from "./registerConnector.js";
import { languages } from "../../language";
import { constCountries, classCss } from "../../constant.js"
import './register.css';
import { Navigate } from "react-router-dom";
import FrontEndStatusConsumer from '../Context/FrontEndStatusConsumer.js';

let myLanguaje = 'en'
let myTheme = 'dark'

function Register(props){
    const [defaulValues, setDefaulValues] = useState( {
        INPUT_NAME: '..',
        INPUT_LASTNAME: '..',
        INPUT_EMAIL: 'you@example.com',
        INPUT_PASS: '**',
        INPUT_REPASS: '**',
        INPUT_OTHER: 'Text',
        INPUT_COUNTRY: 'AR',
    }) 
    let nameOfElementsArray = {}
    let validateArray = {}
    let valueArray = {}
    

    const addElementToArrayName = (name, title) =>{
        nameOfElementsArray[name] = title
    }

    const setValidates = (name, validate) =>{
        validateArray[name]= (validate===true)? true: false
    }

    const setValues = (event) => {
        const name = event.target.name
        valueArray[name] = event.target.value
    }
    
    const refModalWindow = useRef(null);
    const onClickErrroModal = () => {}

    const hasUser = (Status) => {
        if(Status.userDarkMode.user){
            if(Status.userDarkMode.user.accessToken !== defaulValues.TOKEN){
                setDefaulValues( {
                    INPUT_NAME: Status.userDarkMode.user.displayName,
                    INPUT_LASTNAME: '',
                    INPUT_EMAIL: Status.userDarkMode.user.email,
                    INPUT_PASS: '**',
                    INPUT_REPASS: '**',
                    INPUT_OTHER: 'Text',
                    INPUT_COUNTRY: 'AR',
                    TOKEN: Status.userDarkMode.user.accessToken,
                    emailReadOnly: true,
                }) 
                return true
            }
        }
    }

    return (
        <FrontEndStatusConsumer receiveStatus={hasUser} condition={true}>
        <div className={myTheme}>
            <ModalWindow ref={refModalWindow} setValidate={onClickErrroModal}>
            </ModalWindow>
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
                <div className={classCss.classCssContentDiv}>
                    <TextTitle H="H4">{languages[myLanguaje].REGISTER.HEADING_REGISTER}</TextTitle>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaulValues.INPUT_NAME} title={languages[myLanguaje].REGISTER.INPUT_NAME} name="name" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaulValues.INPUT_LASTNAME} title={languages[myLanguaje].REGISTER.INPUT_LASTNAME} name="lastname" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue={defaulValues.INPUT_EMAIL} title={languages[myLanguaje].REGISTER.INPUT_EMAIL} name="email" type="email" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateEmailInput()}
                    readOnly={defaulValues.emailReadOnly}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className="grid grid-cols-2 gap-4 w-1/2">
                    <div className='form-group'>
                        <FormInput Id="passOrig" isRequired="true" initialValue={defaulValues.INPUT_PASS} title={languages[myLanguaje].REGISTER.INPUT_PASS} name="passwd" type="password" 
                        addElementToArrayName={addElementToArrayName}
                        validateFunction={validateInputPass()}
                        setValidate={setValidates} setValue={setValues}></FormInput>
                    </div>
                    <div className='form-group'>
                        <FormInput isRequired="true" initialValue={defaulValues.INPUT_REPASS} title={languages[myLanguaje].REGISTER.INPUT_REPASS} name="repasswd" type="password" 
                        addElementToArrayName={addElementToArrayName}
                        validateFunction={validateEqual("passOrig")}
                        setValidate={setValidates} setValue={setValues}></FormInput>
                    </div>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput initialValue={defaulValues.INPUT_OTHER} title={languages[myLanguaje].REGISTER.INPUT_OTHER} name="text" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    setValue={setValues}></FormInput>
                </div>
                <div >
                    <CheckFormDropDown isRequired="true" initialValue={defaulValues.INPUT_COUNTRY} title={languages[myLanguaje].REGISTER.INPUT_COUNTRY} name="country"
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
        </FrontEndStatusConsumer>
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
            console.log(valueArray)
            registerHandleSubmit(valueArray, errorSubmit, okSubmit)
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
    }
    
}


export default Register