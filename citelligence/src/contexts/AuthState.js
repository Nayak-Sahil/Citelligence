"use client"
import authContext from "./AuthContext";
import { useState } from "react";
import { SessionProvider } from 'next-auth/react'

export const AuthState = (props) => {
    // this return syntax is same for every context
    const stateInfo = {}//empty object
    const [state, setState] = useState(stateInfo);
    console.warn("inside context state")
    const update = (newStateInfo) => {
        setState(newStateInfo)
    }

    return (
        <authContext.Provider value={{ state, update }}>
            <SessionProvider>
                {props.children}
            </SessionProvider>
        </authContext.Provider>
    );
};
