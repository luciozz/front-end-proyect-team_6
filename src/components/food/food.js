import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen.ts'

const Food = () => {
    const ref= useRef(null)
    const isVisible = useOnScreen(ref)
    return (
        <div ref={ref}>
        <hr></hr>
        Final de la página
        </div>
    )
}

export default Food