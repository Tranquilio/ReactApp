import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false, 
    token: null,
    email: null,
    login: () => {
        console.log("hello")
    }, 
    logout: () => {} 
});