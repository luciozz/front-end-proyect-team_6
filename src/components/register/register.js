import { useState } from "react";
import { useFormInput, CheckFormInput, validateInputMin, ButtonSubmit, CheckFormDropDown } from '../utils/forms';
import { URL_Register } from '../../constant';
import './register.css';

function Register(props){
    const [validateArray, setValidateArray] = useState({}) 
    let valueArray = {}

    const setValidates = (event) =>{
        const name = event.target.name
        const validate = event.target.attributes['validate']
        //console.log(event.target.name, event.target.value, event.target.attributes['validate'])
        validateArray[name]= (validate===true)? true: false
    }

    const setValues = (event) => {
        const name = event.target.name
        valueArray[name] = event.target.value
    }

    return (
        <>
        <div className="h-screen flex flex-col items-center ">
            <div>
                Register
            </div>
            <div className='w-1/2 ...'>
                <CheckFormInput initialValue=".." title="Name" name="name" type="text" 
                validateFunction={validateInputMin(2)}
                setValidate={setValidates} setValue={setValues}></CheckFormInput>
            </div>
            <div className='w-1/2 ...'>
                <CheckFormInput initialValue=".." title="Last Name" name="lastname" type="text" 
                validateFunction={validateInputMin(2)}
                setValidate={setValidates} setValue={setValues}></CheckFormInput>
            </div>
            <div className='w-1/2 ...'>
                <CheckFormInput initialValue="you@example.com" title="Email" name="email" type="email" 
                validateFunction={validateInputMin(4)}
                setValidate={setValidates} setValue={setValues}></CheckFormInput>
            </div>
            <div className="grid grid-cols-2 gap-4 w-1/2">
                <div className='form-group mb-6'>
                    <CheckFormInput initialValue="**" title="Password" name="passwd" type="password" 
                    validateFunction={validateInputMin(6)}
                    setValidate={setValidates} setValue={setValues}></CheckFormInput>
                </div>
                <div className='form-group mb-6'>
                    <CheckFormInput initialValue="**" title="Re-enter your password" name="repasswd" type="password" 
                    validateFunction={validateInputMin(6)}
                    setValidate={setValidates} setValue={setValues}></CheckFormInput>
                </div>
            </div>
            <div >
                <CheckFormDropDown initialValue=".." title="Last Name" name="lastname" type="text" 
                validateFunction={validateInputMin(2)}
                setValidate={setValidates} setValue={setValues}></CheckFormDropDown>
            </div>
            <div >
                * Required fields
            </div>
            <div>
                <ButtonSubmit functionActionSubmit={submit} ></ButtonSubmit>
            </div>
        </div>
        </>
    )

    function submit(){
        console.log(validateArray)
        for (const element in validateArray) {
            console.log(validateArray[element]);
        }
        
    }
    
}


export default Register