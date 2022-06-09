import { FrontEndContext } from "./FrontEndContext";
import { useState } from "react";

const FrontEndStatus = ({children}) => {
    const [userDarkMode, setUserDarkMode] = useState(false);
    const toggleFrontEndContext = (newUser, newDarkMode = null) => {
        if(newDarkMode !== null){
            const newContextA = {
                user: newUser,
                darkMode: newDarkMode,
            }
            setUserDarkMode(newContextA);
        }else{
            const newContextB = {
                user: newUser,
            }
            setUserDarkMode(newContextB);
        }
    };
    return (
        <FrontEndContext.Provider value={{ userDarkMode, toggleFrontEndContext }}>
            {children}
        </FrontEndContext.Provider>
    );
}

export default FrontEndStatus;