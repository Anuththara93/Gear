import {
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
} from './AppI'
import Problems from './pages/admin/pages/problems/problems';
import Users from './pages/admin/pages/users/users';
import { Update } from './pages/customer/Update';
import Workers from './pages/admin/pages/workers/workers';
import Products from './pages/admin/pages/products/products';
import { useEffect, useState } from "react"
import ProductView from './pages/customer/productView';

function App() {
  const [cookies, setCookies] = useCookies(["admin_token", "access_token"]);

  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path='/' element={<HHome />} >
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Userverify><Register /></Userverify>} ></Route>
            <Route path='/login' element={<Userverify><Login /></Userverify>} ></Route>
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/updateprofile' element={<UpdateProfile />} >
              <Route path='/updateprofile/' element={<Update />} />
            </Route>
            <Route path='/productview' element={<ProductView />} />
          </Route >
          <Route path='/admin' element={<Adminverify><AdminLogin /></Adminverify>}> </Route>
          <Route path='/adminlogged' element={<Adminverify2><Admin /></Adminverify2>}>
            <Route path='/adminlogged/' element={<Adminverify><Users /></Adminverify>}> </Route>
            <Route path='/adminlogged/products' element={<Products />} />
            <Route path='/adminlogged/problems' element={<Problems />} />
            <Route path='/adminloggedorders' element={<Orders />}> </Route>
            <Route path='/adminlogged/workers' element={<Workers />}></Route>
          </Route>

        </Routes>
      </Router >

    </div >
  );
}

export default App;
