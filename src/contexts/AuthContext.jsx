import React, { useState, useEffect, useContext, createContext } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

const AuthContext = createContext({
    currentUser: null,
    loading: true,
    authError: null,
    setAuthError: () => Promise.reject('Not implemented'),
    signup: () => Promise.reject('Not implemented'),
    login: () => Promise.reject('Not implemented'),
    logout: () => Promise.reject('Not implemented')
});

export const useAuth = () => { 
    return useContext(AuthContext); 
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState(null);

    const signup = (email, password) => {
        setAuthError(null);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const login = (email, password) => {
        setAuthError(null);
        return signInWithEmailAndPassword(auth, email, password);
    };
    
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        loading,
        authError,
        setAuthError,
        signup,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};