import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const GlobalVarContext = createContext()
export default GlobalVarContext;

export const GlobalVarProvider = ({ children }) => {
    const { authTokens } = useContext(AuthContext);
    const [navName, setNavName] = useState('Not Logged');
    const [currenFolderName, setCurrenFolderName] = useState('Home');

    useEffect(() => {
        if (authTokens) {
            setNavName('Welcome');
        } else {
            setNavName('Please Login')
        }
    }, [authTokens]);

    const contextData = {
        navName,
        setNavName,
        currenFolderName,
        setCurrenFolderName
    }
    return (
        <GlobalVarContext.Provider value={contextData}>
            {children}
        </GlobalVarContext.Provider>
    );

}