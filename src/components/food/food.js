import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen.ts'

const Food = (props) => {
    const ref= useRef(null)
    const isVisible = useOnScreen(ref, '0px', () => { 
        if (props.onVisible) {
            props.onVisible()
        }
    })
    return (
        <>
        <div ref={ref} >
        <hr></hr>
        nahuelmoreno.org (2022)
        </div>
        </>
    )
}

export default Food