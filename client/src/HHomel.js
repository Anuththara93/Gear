import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/customer/Home.js';
import { Register } from './pages/customer/Register.js';
import { Login } from './pages/customer/Login.js';
import { AdminLogin } from './pages/admin/Login';
import { Aboutus } from './pages/customer/Aboutus';
import { Navbar } from "./components/Navbar.js";
import { Contactus } from './pages/customer/Contactus.js';
import { UpdateProfile } from './pages/customer/UpdateProfile';
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"
import React from 'react';
export {
    Router,
    Routes,
    Route,
    useLocation,
    Home,
    Register,
    Login,
    AdminLogin,
    Aboutus,
    Navbar,
    Contactus,
    UpdateProfile,
    useCookies,
    useNavigate,
    React,
};