import React from "react";

export const FrontEndContext = React.createContext(
    {
        user: {
            name: '',
            username: '',
            email: '',
            photo: '',
            providerID: '',
            token: '',
        },   
        darkMode: false,
        toggleFrontEndContext: () => {},
    }
);
