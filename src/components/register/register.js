import { useRef } from "react";
import { validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateInputPass, validateEqual, TextTitle, ModalWindow } from '../utils/forms';
import { registerHandleSubmit } from "./registerConnector.js";
import { languages } from "../../language";
import { constCountries, classCss } from "../../constant.js"
import './register.css';

let myLanguaje = 'en'
let myTheme = 'dark'

function Register(props){
    //const [validateArray, setValidateArray] = useState({}) 
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

    return (
        <>
        <div className={myTheme}>
            <ModalWindow ref={refModalWindow} setValidate={onClickErrroModal}>
            </ModalWindow>
            <div className="h-screen flex flex-col items-center dark:bg-gray-800">
                <div className={classCss.classCssContentDiv}>
                    <TextTitle H="H4">{languages[myLanguaje].REGISTER.HEADING_REGISTER}</TextTitle>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue=".." title={languages[myLanguaje].REGISTER.INPUT_NAME} name="name" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue=".." title={languages[myLanguaje].REGISTER.INPUT_LASTNAME} name="lastname" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateInputMin(2)}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue="you@example.com" title={languages[myLanguaje].REGISTER.INPUT_EMAIL} name="email" type="email" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateEmailInput()}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className="grid grid-cols-2 gap-4 w-1/2">
                    <div className='form-group'>
                        <FormInput Id="passOrig" isRequired="true" initialValue="**" title={languages[myLanguaje].REGISTER.INPUT_PASS} name="passwd" type="password" 
                        addElementToArrayName={addElementToArrayName}
                        validateFunction={validateInputPass()}
                        setValidate={setValidates} setValue={setValues}></FormInput>
                    </div>
                    <div className='form-group'>
                        <FormInput isRequired="true" initialValue="**" title={languages[myLanguaje].REGISTER.INPUT_REPASS} name="repasswd" type="password" 
                        addElementToArrayName={addElementToArrayName}
                        validateFunction={validateEqual("passOrig")}
                        setValidate={setValidates} setValue={setValues}></FormInput>
                    </div>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput initialValue="Text" title={languages[myLanguaje].REGISTER.INPUT_OTHER} name="text" type="text" 
                    addElementToArrayName={addElementToArrayName}
                    setValue={setValues}></FormInput>
                </div>
                <div >
                    <CheckFormDropDown isRequired="true" initialValue="AR" title={languages[myLanguaje].REGISTER.INPUT_COUNTRY} name="country"
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
        </>
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
            refModalWindow.current.showModalWindow('Error', {__html: e}, true, 'red')
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