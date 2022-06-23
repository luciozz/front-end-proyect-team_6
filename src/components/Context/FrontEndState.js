import { FrontEndContext } from "./FrontEndContext";
import { useState } from "react";

const FrontEndState = ({children}) => {
    const [globalState, setGlobalState] = useState(false);
    const toggleGlobalState = (newUser, newDarkMode = null) => {
        if(newDarkMode !== null){
            const newContextA = {
                user: newUser,
                darkMode: newDarkMode,
            }
            setGlobalState(newContextA);
        }else{
            const newContextB = {
                user: newUser,
            }
            setGlobalState(newContextB);
        }
    };
    return (
        <FrontEndContext.Provider value={{ globalState, toggleGlobalState }}>
            {children}
        </FrontEndContext.Provider>
    );
}

export default FrontEndState;