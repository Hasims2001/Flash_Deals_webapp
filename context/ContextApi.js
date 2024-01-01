import { useState } from "react";
import { createContext } from "react";



export const AppContext = createContext();

export const ContextApi = ({children})=>{
    const [data, setData] = useState({isLoading: false, isError: "", products:[]})

    const handleData = (operation, value)=>{
            setData({
                ...data,
                [operation]: value,
            })
    }
    return (
        <AppContext.Provider value={{data, handleData}}>{children}</AppContext.Provider>
    )
}