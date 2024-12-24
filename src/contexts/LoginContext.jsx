import React, { createContext, useState, useContext, useEffect } from 'react';



const LoginContext = createContext();

export const useLogin = () => {
    return useContext(LoginContext);
};

export const LoginProvider = ({ children }) => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || null;
    const storedIsLoggedIn = storedUser ? true : false;

    const [user, setUser] = useState(storedUser);
    const [isLoggedIn, setIsLoggedIn] = useState(storedIsLoggedIn);

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('user');
    };

    useEffect(() => {
        if (isLoggedIn && user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [isLoggedIn, user]);

    return (
        <LoginContext.Provider value={{ user, isLoggedIn, login, logout }}>
            {children}
        </LoginContext.Provider>
    );
};
