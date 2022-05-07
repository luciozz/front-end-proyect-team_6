import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen.ts'
import Food from '../food/food.js';

const Container = (props) => {
    const ref = useRef(null);
    /*const isVisible = useOnScreen(ref, '0px', () => { 
        let mark = new Date()
        console.log("isVisible", mark.getTime());
        props.theEndShow() 
    });
    
    isVisible={isVisible}*/

    return (
        <>
            <div >
                {props.children}
            </div>
            <Food theRef={ref} ></Food>
        </>
    )
}

export default Container