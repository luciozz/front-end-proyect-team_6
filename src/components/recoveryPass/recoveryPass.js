import { useRef } from "react";
import { languages } from "../../language";
import { validateEmailInput, ButtonSubmit, FormInput, TextTitle, ModalWindow } from '../utils/forms';
import { recoveryPassHandleSubmit } from "./recoveryPassConnector.js";
import { classCss } from "../../constant.js"


let myLanguaje = 'en'
let myTheme = 'white'


function RecoveryPass(props){
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
                    <TextTitle H="H4">{languages[myLanguaje].RECOVERYPASS.HEADING}</TextTitle>
                </div>
                <div className='w-1/2 ...'>
                    <FormInput isRequired="true" initialValue="you@example.com" title={languages[myLanguaje].RECOVERYPASS.INPUT_EMAIL} name="email" type="email" 
                    addElementToArrayName={addElementToArrayName}
                    validateFunction={validateEmailInput()}
                    setValidate={setValidates} setValue={setValues}></FormInput>
                </div>
                <div className={classCss.classCssTitleH6}>
                    {languages[myLanguaje].RECOVERYPASS.TEXT_REQUIRED_FIELDS}
                </div>
                <div>
                    <ButtonSubmit functionActionSubmit={submit} title={languages[myLanguaje].RECOVERYPASS.TEXT_SUBMIT}></ButtonSubmit>
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
            errorValidate = languages[myLanguaje].RECOVERYPASS.ERROR_ITEMS + "<br/>" + errorValidate
            refModalWindow.current.showModalWindow('Error', {__html: errorValidate}, true, 'red')
            return
        }

        // Get values of elements
        try{
            console.log(valueArray)
            recoveryPassHandleSubmit(valueArray, errorSubmit, okSubmit)
        }catch(e){
            refModalWindow.current.showModalWindow(languages[myLanguaje].RECOVERYPASS.REGISTRATION_ERROR, {__html: e}, true, 'red')
        }
    }

    function errorSubmit(e){
        //console.log('error submit', e)
        refModalWindow.current.showModalWindow(languages[myLanguaje].RECOVERYPASS.REGISTRATION_ERROR, {__html: '<p>'+languages[myLanguaje].RECOVERYPASS.ERROR_SUBMIT+'</p><p>'+e+'</p>'}, true, 'red')
    }

    function okSubmit(e){
        refModalWindow.current.showModalWindow(languages[myLanguaje].RECOVERYPASS.REGISTRATION_COMPLETE, {__html: languages[myLanguaje].RECOVERYPASS.OK_SUBMIT}, true)
    }
    
}


export default RecoveryPass