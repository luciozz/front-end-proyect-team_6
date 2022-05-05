import React, { useRef } from 'react'
import useOnScreen from '../../hooks/useOnScreen.ts'
import Food from '../food/food.js';

const Container = (props) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, '0px', props.theEndShow);
    console.log("isVisible", isVisible);

    return (
        <>
            <div ref={ref}>
                {props.children}
            </div>
            <Food isVisible={isVisible}></Food>
        </>
    )
}

export default Container