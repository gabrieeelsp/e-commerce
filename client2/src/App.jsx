import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

import { me, userVerified } from './features/auth/authSlice'

import * as rubrosSlice from "./features/rubros/rubrosSlice";
const getAllRubros = rubrosSlice.getAll;

import * as brandsSlice from "./features/brands/brandsSlice";
const getAllBrands = brandsSlice.getAll;

import HeaderComponent from './components/header/HeaderComponent'
import CartSidebar from "./components/CartSidebar/CartSidebar"
import { useEffect, useState } from "react"
import { getCart } from "./features/cart/cartSlice"



function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRubros());
        dispatch(getAllBrands());

        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            dispatch(me())
        } else { 
            dispatch(userVerified())
        }

        const cart_id = localStorage.getItem('cart_id');
        if (cart_id) dispatch(getCart())

    }, [dispatch])

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const { brands } = useSelector((state) => state.brands)
    
    return (
        <>
            <div className="min-h-screen bg-white">
                <HeaderComponent showCartSidebar={isSidebarOpen} setShowCartSidebar={setIsSidebarOpen} />
                <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                <div className="max-w-5xl mx-auto mt-3">
                    { Object.keys(brands).length !== 0 && <Outlet />}

                </div>
            </div>
        </>
    )
}

export default App
