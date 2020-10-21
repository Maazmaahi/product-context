import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import SHOP_DATA from "../constants/ShopData";

// Initial State
const initialState = {
    collections: SHOP_DATA,
    cartNumber: 0,
    isLoading: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const incrementNumber = id => {
        dispatch({
            type: 'INCREMENT_NUMBER',
            payload: id
        })
    }

    const decrementNumber = id => {
        dispatch({
            type: 'DECREMENT_NUMBER',
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            collections: state.collections,
            cartNumber: state.cartNumber,
            incrementNumber,
            decrementNumber
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
