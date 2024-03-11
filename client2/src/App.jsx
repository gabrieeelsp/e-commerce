import { Outlet, Link } from "react-router-dom"
import { useDispatch } from 'react-redux'

import { me } from './features/auth/authSlice'

import HeaderComponent from './components/layout/HeaderComponent'


function App() {
    const dispatch = useDispatch();

    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) dispatch(me())
    
    return (
        <>
            <div className="min-h-screen bg-slate-100">
                <HeaderComponent />
                <Link to="google.com">
                    <div className="bg-slate-300 h-40">

                    </div>
                </Link>
                
                <Outlet />
            </div>
        </>
    )
}

export default App
