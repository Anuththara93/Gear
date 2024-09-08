import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Users from './pages/users/users';
import Products from './pages/products/products';
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Workers from './pages/workers/workers';
import Problems from './pages/problems/problems';
import Orders from './pages/orders/orders';
import './styles/global.css';

export const Admin = () => {

    const navigate = useNavigate();
    const [_, setCookies] = useCookies("admin_token");


    return <div className="main">

        <Navbar />
        <div className="container">
            <div className="menuContainer">
                <Menu />
            </div>
            <div className="contentContainer">
                <Routes>
                    <Route path='/' element={<Users />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/problems' element={<Problems />} />
                    <Route path='/orders' element={<Orders />}> </Route>
                    <Route path='/workers' element={<Workers />}></Route>
                </Routes>
            </div>
        </div>
        <Footer />
    </div>
}

