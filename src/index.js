// Modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

// CSS Imports
import './index.css';

// Components Imports
import theme from './themes/theme';
import DefaultLayout from './layouts/DefaultLayout';
import HomeLayout from './layouts/HomeLayout';
import Home from './pages/Home';
import HomeHeroSection from './pages/HomeHeroSection';
import SignUp from './pages/SignUp';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';

import { LoginProvider } from './contexts/LoginContext';
import Dashboard from './pages/Dashboard';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
        <LoginProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signUP" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </LoginProvider>
    </QueryClientProvider>
);