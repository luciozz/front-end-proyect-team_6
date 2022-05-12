/*import { render } from "@testing-library/react";*/
import React, { useState, useRef }  from "react";
import {classCss} from '../../constant.js'
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
const validateEqual = (idHTML) => {

    const funcionParametrizada = (event) => {
        let text = event.target.value
        let origText = ""
        if(document.getElementById(idHTML)){
            origText = document.getElementById(idHTML).value
        }else{
            console.log('ValidateEqual - Id Orginal input - Error')
            return false
        } 

        return (origText === text);
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
 - isValidateDefault
 - setValidate = function
 - setValue = function
 */
const FormInput = (props) => {
    let isValidateDefault = false
    if (props.isValidateDefault) isValidateDefault = true
    const [myValidate, setMyValidate] = useState(isValidateDefault)
    let classnameRequired
    let myClassCss = ""
    let id = props.Id

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
            myClassCss = classCss.classCssGreen
        }else{
            myClassCss = classCss.classCssRed
        } 

        classnameRequired = classCss.classCssNameRequired
    }else{
        classnameRequired = classCss.classCssNameNotRequired
        myClassCss = classCss.classCssBlue
    }

    return(
        <div >
            <div className="titleOfInput">
            <span className={classnameRequired}>
                {props.title}
            </span>
            </div>
          <input {... id? (id={id}) :''} onBlur={lastCheck} validate={myValidate.toString()} type={props.type} name={props.name} className={myClassCss} placeholder={props.initialValue} />
        </div>
    )
}

/* DropDown form with a Check o Require symbol to user orientation 
    - optionsSelect = Array {name: , value: } of element to select
    - Id
    - initialValue
    - isRequired
    - title
    - setValidate = function
    - setValue = function
*/
const CheckFormDropDown = (props) => {
    let isValidateDefault = false
    if(props.initialValue) isValidateDefault = true
    const [myValidate, setMyValidate] = useState(isValidateDefault);
    let id = props.Id
    let value = props.initialValue
    const selectDropDown = (e) => {
        if(props.isRequired){
            if(e.target.selectedIndex===0){
                setMyValidate(false)            
            }else{
                setMyValidate(true)
                props.setValue(e)
            }
        }else{
            props.setValue(e)
        }
    }

    let myClassCss = ""
    if(props.isRequired){
        props.setValidate({target :{name: props.name, attributes: {validate: myValidate}}})
        if(myValidate) {
            myClassCss = classCss.classCssGreenDropDown
        }else{
            myClassCss = classCss.classCssRedDropDown
        }
    }else{
        myClassCss = classCss.classCssBlueDropDown
    }
    
    return(
        <>
        <div className="flex justify-center">
        <select className={myClassCss} onChange={selectDropDown} name={props.name} 
          {... id? (id={id}) :''} 
          defaultValue={props.initialValue}
          validate={myValidate.toString()}>
          <option value="#####">{props.title}</option>
          {props.optionsSelect.map((element) => {
              if(element.value === props.initialValue){
                return (<option key={element.value} value={element.value}>{element.name}</option>)
            } else
                return (<option key={element.value} value={element.value}>{element.name}</option>)
        })}
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
        <button type="submit" className={classCss.classCssButtonBlue} onClick={myPersonalFunctionActionSubmit}>Submit</button>
      )
}

/* Title for a Page */
const TextTitle = (props) => {
    let myClassCss = ""

    if(props.H){
        switch(props.H){
            case 'H1':
                myClassCss = classCss.classCssTitleH1
            case 'H2': 
                myClassCss = classCss.classCssTitleH2
            case 'H3': 
                myClassCss = classCss.classCssTitleH3
            case 'H4': 
                myClassCss = classCss.classCssTitleH4
        }
    }

    const myPersonalFunctionActionSubmit = (e) => {

    }


    return (
        <p className={myClassCss} onClick={myPersonalFunctionActionSubmit}>{props.children}</p>
      )
}

export { useFormInput, validateInputPass, validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateEqual, TextTitle};