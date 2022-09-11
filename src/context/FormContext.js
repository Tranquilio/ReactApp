import { createContext } from "react";

export const FormContext = createContext({
    companyName: null, 
    formLink: null,
    saveFormContext: () => {},
    clearFormContext: () => {}
});