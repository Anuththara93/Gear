import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/customer/Home.js';
import { Register } from './pages/customer/Register.js';
import { Login } from './pages/customer/Login.js';
import { AdminLogin } from './pages/admin/Login';
import { Aboutus } from './pages/customer/Aboutus';
import { Navbar } from "./components/Navbar.js";
import { Contactus } from './pages/customer/Contactus.js';
import HHome from './HHome';
import { Admin } from './pages/admin/Admin';
import { UpdateProfile } from './pages/customer/UpdateProfile';
import { useNavigate } from "react-router-dom"
import { useCookies } from 'react-cookie';
import { AccessDenied } from './SupComponents/AccessDenied';
import React from 'react';
import { Orders } from './pages/customer/Orders';
export {
    React,
    Router,
    Routes,
    Route,
    useLocation,
    HHome,
    useNavigate,
    useCookies,
    AccessDenied,
    Home,
    Register,
    Login,
    Aboutus,
    Navbar,
    Contactus,
    UpdateProfile,
    Admin,
    AdminLogin,
    Orders
};