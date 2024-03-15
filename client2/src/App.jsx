import { Outlet } from "react-router-dom"
import { useDispatch } from 'react-redux'

import { me } from './features/auth/authSlice'

import HeaderComponent from './components/layout/HeaderComponent'


function App() {
    const dispatch = useDispatch();

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) dispatch(me())
    
    return (
        <>
            <div className="min-h-screen bg-white">
                <HeaderComponent />

                <div className="max-w-5xl mx-auto mt-3">
                    <Outlet />

                </div>
            </div>
        </>
    )
}

export default App
