import { createContext } from "react";

export const FormContext = createContext({
    company: null, 
    formLink: null,
    saveFormContext: () => {},
    clearFormContext: () => {}
});