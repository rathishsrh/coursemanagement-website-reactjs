import { createContext, useState } from "react";

export let ContextForAuth=createContext();

export let AuthProvider=({children})=>{
    let [auth,setAuth]=useState("");
    return(<ContextForAuth.Provider value={{auth,setAuth}}>
            {children}
        </ContextForAuth.Provider>)
}
