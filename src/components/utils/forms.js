/*import { render } from "@testing-library/react";*/
import React, { useState, useRef }  from "react";
import './forms.css'

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};


/*  Your password must contain at least 
    - one capital letter, 
    - one number 
    - one lowercase letter
    - one special character
     and it must contain at least 8
    *characters*/
const validateInputPass = (event) => {
    const funcionParametrizada = (event) => {
        let pass = event.target.value;            
        let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;

        return reg.test(pass);
    }

    return funcionParametrizada
};

/*  Compare for equals to reference */
const validateEqual = (ref) => {
    console.log(ref)
    const funcionParametrizada = (event) => {
        let text = event.target.value;            
        let origText = ref.current.value
        console.log(origText, test)
        return (origText === test);
    }

    return funcionParametrizada
}

/*  Your input must contain at least NUMER characters
    (letters and Numbers).
    return a function to check*/
    const validateInputMin = (minChar = 3) => {

        const funcionParametrizada = (event) => {
            let pass = event.target.value;            
            let pattern = '^[a-zA-Z0-9]{'+minChar+',}$'
            let reg = new RegExp(pattern, "g");

            return reg.test(pass);
        }

        return funcionParametrizada
    };

/* Validate email format */
const validateEmailInput = () => {

    const funcionParametrizada = (event) => {
        let pass = event.target.value;            
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        
        return reg.test(pass);
    }

    return funcionParametrizada
};


/* Input form with a Check o Require symbol to user orientation 
 - isRequired
 - validateFunction
 - type
 - name
 - title
 - initialValue
*/
const FormInput = (props) => {
    const [myValidate, setMyValidate] = useState(false)
    let classnameRequired
    let classCss = ""

    const lastCheck = (e) => {
        if(props.isRequired){
            setMyValidate(props.validateFunction(e))
            props.setValidate(e)
            props.setValue(e)
            console.log(props.validateFunction(e))
        }else{
            props.setValue(e)
        }
    }

    if(props.isRequired){
        props.setValidate({target :{name: props.name, attributes: {validate: myValidate}}})

        if(myValidate) {
            classCss = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1 border-green-500'
        }else{
            classCss = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1 border-red-500'
        } 

        classnameRequired = "after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
    }else{
        classnameRequired = "after:content after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"
        classCss = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1 border-sky-500'    
    }

    return(
        <div >
            <div className="titleOfInput">
            <span className={classnameRequired}>
                {props.title}
            </span>
            </div>
          <input onBlur={lastCheck} validate={myValidate.toString()} type={props.type} name={props.name} className={classCss} placeholder={props.initialValue} />
        </div>
    )
}

/* DropDown form with a Check o Require symbol to user orientation */
const CheckFormDropDown = (props) => {
    const [myValidate, setMyValidate] = useState(false)

    const selectDropDown = (e) => {
        if(e.target.selectedIndex===0){
            setMyValidate(false)            
        }else{
            setMyValidate(true)
        }
    }

    let classCss = ""
    if(myValidate) {
        classCss = 'dropdown-toggle px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap'
    }else{
        classCss = 'dropdown-toggle px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap'
    }
    
    return(
        <>
        <div className="flex justify-center">
        <select className={classCss} onChange={selectDropDown} name="cars" id="cars">
          <option value="#####">Choose a car:</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select> 
        </div>
        </>
    )
}


/* Button Submit to use for all app */
const ButtonSubmit = (props) => {

    const myPersonalFunctionActionSubmit = (e) => {
        if(props.functionActionSubmit instanceof Function) {
            props.functionActionSubmit(e)
        } else {
            alert('Submit')
        }    
    }

    return (
        <button type="submit" className="
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out" onClick={myPersonalFunctionActionSubmit}>Submit</button>
      )
}

export { useFormInput, validateInputPass, validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateEqual };