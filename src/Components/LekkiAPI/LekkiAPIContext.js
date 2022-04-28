import { createContext, useReducer } from "react";
import lekkiApiReducer from "./LekkiAPIReducer";

const LekkiAPIContext = createContext()

export const LekkiAPIProvider = ({children}) => {
    const initialState = {
        properties: [],
        loading: false,
        error: false
    }

    const [state, dispatch] = useReducer(lekkiApiReducer, initialState)

    return <LekkiAPIContext.Provider value={{
        ...state,
        dispatch
    }}
    >
        {children}
    </LekkiAPIContext.Provider>
}

export default LekkiAPIContext