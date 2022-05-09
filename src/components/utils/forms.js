import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
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


/*  Your password must contain at least one capital letter, one
    *number and one lowercase letter, and it must contain at least 8
    *characters*/
const validateForm = (event) => {
    let pass = event.target.value;
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    let test = reg.test(pass);
    if (test) {
        this.setState({ value: event.target.value });
    } else {
        alert("password validation unsuccessful. Please try again.");
        return;
    }
};


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
    

/* Input form with a Check o Require symbol to user orientation */
const CheckFormInput = (props) => {
    const [myValidate, setMyValidate] = useState(false)
    props.setValidate({target :{name: props.name, attributes: {validate: myValidate}}})

    let validateFunction = props.validateFunction

    const lastCheck = (e) => {
        setMyValidate(validateFunction(e))
        props.setValidate(e)
        props.setValue(e)
        console.log(validateFunction(e))
    }

    let classCss = ""
    if(myValidate) {
        classCss = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1 border-green-500'
    }else{
        classCss = 'mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 w-full rounded-md sm:text-sm focus:ring-1 border-red-500'
    }        
    
    return(
        <div >
            <div className="titleOfInput">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
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
    props.setValidate({target :{name: props.name, attributes: {validate: myValidate}}})

    let validateFunction = props.validateFunction

    const clickAndSet = (e) => {
        setMyValidate(true)
        props.setValidate(e)
        props.setValue(e)
        console.log(e)
    }

    let classCss = ""
    if(myValidate) {
        classCss = 'dropdown-toggle px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap'
    }else{
        classCss = 'dropdown-toggle px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap'
    }        
    
    return(
        <>
        <div className="flex justify-center">
  <div>
    <div className="dropdown relative">
      <button
        className="
          dropdown-toggle
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
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          className="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Action</a
          >
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Another action</a
          >
        </li>
        <li>
          <a
            className="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Something else here</a
          >
        </li>
      </ul>
    </div>
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

export { useFormInput, validateForm, CheckFormInput, validateInputMin, ButtonSubmit, CheckFormDropDown };