import React, {useState, useContext, createContext} from 'react';
import cartItems from "./data";

const AppContext = createContext();

const AppProvider = ({children}) => {
    const [cart, setCart] = useState(cartItems);
    
    return (
        <AppContext.Provider value={{cart}}>
            {children}
        </AppContext.Provider>
    ); 
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppContext, AppProvider}