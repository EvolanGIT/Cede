import { useReducer } from "react";

import {UPDATE_PATIENT, UPDATE_EMERGENCY_CONTACT, UPDATE_ALLERGY} from "./actions";

export const reducer = (state, action) => {
    switch (action.typee) {
        
        case UPDATE_PATIENT:
            return {
                ...state,
                userInfo: [...action.userInfo],
        };
        
        case UPDATE_EMERGENCY_CONTACT:
            return {
                ...state,
                contact: [...action.contact],
                }
    
        case UPDATE_ALLERGY:
            return {
                ...state,
                allergies: [...action.allergies],
                }

    default:
        return state;

    }
};

export function useInfoReducer(initialstate) {
    return useReducer(reducer, initialstate)
}