import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen.ts'

const Food = (props) => {
    const ref= useRef(null)
    const isVisible = useOnScreen(ref, '0px', () => { 
        if (props.onVisible) {
            props.onVisible()
        }
        /*alert('visible')*/
    })
    return (
        <>
        <div ref={ref} >
        <hr></hr>
        Final de la página
        </div>
        </>
    )
}

export default Food