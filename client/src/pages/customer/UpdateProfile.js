import { Route, Routes } from 'react-router-dom'
import { Orders } from './Orders'
import './UpdateProfile.css'
import { Navbar } from '../../HHomeI'
import { NavbarProfile } from '../../components/NavbarProfile'
import { Update } from './Update'

export const UpdateProfile = () => {
    return <div>
        <NavbarProfile />
        <Routes>
            <Route path='/' element={<Update />} />
            <Route path='/orders' element={<Orders />} />
        </Routes>
    </div>
}