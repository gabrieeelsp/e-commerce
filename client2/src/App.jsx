import { Outlet } from "react-router-dom"
import { useDispatch } from 'react-redux'

import { me, userVerified } from './features/auth/authSlice'
import { getAll } from "./features/rubros/rubrosSlice"

import HeaderComponent from './components/header/HeaderComponent'
import CartSidebar from "./components/CartSidebar/CartSidebar"
import { useEffect, useRef, useState } from "react"
import { getCart } from "./features/cart/cartSlice"



function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());

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
    const sidebarRef = useRef();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <>
            <div className="min-h-screen bg-white">
                <HeaderComponent showCartSidebar={isSidebarOpen} setShowCartSidebar={setIsSidebarOpen} />
                <CartSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} ref={sidebarRef} />
                <div className="max-w-5xl mx-auto mt-3">
                    <Outlet />

                </div>
            </div>
        </>
    )
}

export default App
