/*import { render } from "@testing-library/react";*/
import React, { useState }  from "react";
import {classCss, profileImage} from '../../constant.js'
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
        let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        
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
 - addElementToArrayName = function
 */
const FormInput = (props) => {
    let isValidateDefault = false
    if (props.isValidateDefault) isValidateDefault = true
    const [myValidate, setMyValidate] = useState(isValidateDefault)
    let classnameRequired
    let myClassCss = ""
    let id = props.Id

    // Register component into Array Name 
    if(props.addElementToArrayName) props.addElementToArrayName(props.name, props.title)

    const lastCheck = (e) => {
        if(props.isRequired){
            setMyValidate(props.validateFunction(e))
            props.setValidate(props.name, myValidate)
            props.setValue(e)
        }else{
            props.setValue(e)
        }
    }

    if(props.isRequired){
        props.setValidate(props.name, myValidate)

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
        <div className={classCss.classCssContentDiv}>
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
    - dropText = text into button
    - setValidate = function
    - setValue = function
    - addElementToArrayName = function
*/
const CheckFormDropDown = (props) => {
    let isValidateDefault = false
    if(props.initialValue) isValidateDefault = true
    const [myValidate, setMyValidate] = useState(isValidateDefault);
    let id = props.Id
    let classnameRequired

    // Register component into Array Name 
    if(props.addElementToArrayName) props.addElementToArrayName(props.name, props.title)
    if(props.value) props.setValue(props.name, props.value)

    const selectDropDown = (e) => {
        if(props.isRequired){
            if(e.target.selectedIndex===0){
                props.setValidate(props.name, false)      
                setMyValidate(false)
            }else{
                setMyValidate(true)
                props.setValue(e)
                props.setValidate(props.name, myValidate)
            }
        }else{
            setMyValidate(true)
            props.setValidate(props.name, true)
            props.setValue(e)
        }
    }

    let myClassCss = ""
    if(props.isRequired){
        props.setValidate(props.name, myValidate)
        if(myValidate) {
            myClassCss = classCss.classCssGreenDropDown
        }else{
            myClassCss = classCss.classCssRedDropDown
        }
        classnameRequired = classCss.classCssNameRequired
    }else{
        myClassCss = classCss.classCssBlueDropDown
        classnameRequired = classCss.classCssNameNotRequired
    }
    
    return(
        <>
        <div className={classCss.classCssContentDiv}>
          <div className="titleOfInput">
              <span className={classnameRequired}>
                  {props.title}
              </span>
              </div>
          <div className="flex justify-center" onBlur={selectDropDown} >
          <select className={myClassCss} onChange={selectDropDown} name={props.name} 
            {... id? (id={id}) :''} 
            defaultValue={props.initialValue}
            validate={myValidate.toString()}>
            <option value="#####">{props.dropText}</option>
            {props.optionsSelect.list.map((element) => {
                if(element.value === props.initialValue){
                  return (<option key={element.value} value={element.value}>{element.name}</option>)
              } else
                  return (<option key={element.value} value={element.value}>{element.name}</option>)
          })}
          </select> 
          </div>
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
        <button type="submit" className={classCss.classCssButtonBlue} onClick={myPersonalFunctionActionSubmit}>{props.title}</button>
      )
}

/* Title for a Page */
const TextTitle = (props) => {
    let myClassCss = ""

    if(props.H){
        switch(props.H){
            case 'H1':
                myClassCss = classCss.classCssTitleH1
                break
            case 'H2': 
                myClassCss = classCss.classCssTitleH2
                break
            case 'H3': 
                myClassCss = classCss.classCssTitleH3
                break
            case 'H4': 
                myClassCss = classCss.classCssTitleH4
                break
            default:
                myClassCss = classCss.classCssTitleH4
        }
    }

    const myPersonalFunctionActionSubmit = (e) => {

    }


    return (
        <p className={myClassCss} onClick={myPersonalFunctionActionSubmit}>{props.children}</p>
      )
}

class ModalWindow extends React.Component {
  
    constructor(props){
      super(props)
  
      this.state = {showModal: false}
      this.children = props.children
      this.colorCss = ""
    }
  
    showModalWindow(title, textContent, onButtonOk, color){

      this.setState({showModal: true, modalTitle: title, modalTextContent: textContent, modalOnButtonOK: onButtonOk})
      switch (color) {
            case 'normal':
            case 'white':
                this.colorCss = classCss.classCssModalWindow
            break
            case 'red':
                this.colorCss = classCss.classCssModalWindowRed
            break
            default:
                this.colorCss = classCss.classCssModalWindow
      }
    }
  
    setShowModal(state){
      this.setState({showModal: state})
    }
    
    onClickModal(e){
      this.setValue(e)
    }
  
    render(){
      return (
        <>
          {this.state.showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className={this.colorCss}>
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                      {this.state.modalTitle}
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => this.setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      {(this.state.modalTextContent)? (
                        <div className={classCss.classCssModalWindowText}>
                          <p className="my-4 text-lg leading-relaxed" dangerouslySetInnerHTML={this.state.modalTextContent}>
                          </p>
                        </div>
                      ):null}
                    </div>
                    {this.children}
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      {(this.state.modalOnButtonOK)? (
                        <button
                          className={classCss.classCssButtonBlue}
                          type="button"
                          onClick={() => this.setShowModal(false)}
                        >
                          Ok
                        </button>
                      ):null}
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      )
    }
  }
  

const ProfilePicture = (props) => {
    return (
      <div className="card-zoom">
        <div className="card-zoom-image">
            <img src={(props.src)?props.src:profileImage.defaultImage} alt={props.alt}/>
        </div>
      </div>
    )
}

export { useFormInput, validateInputPass, validateInputMin, validateEmailInput, ButtonSubmit, CheckFormDropDown, FormInput, validateEqual, TextTitle, ModalWindow, ProfilePicture};