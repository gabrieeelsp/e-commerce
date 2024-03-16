import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { store } from './app/store.js'

import './index.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8080/'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './views/Home'
import Register from './views/auth/Register.jsx'
import Login from './views/auth/Login.jsx'
import Products from './views/Products.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: ':rubroName',
                element: <Products />,
                children: [
                    {
                        path: ':subrubroName',
                        element: <Products />,
                    }
                ]
            },
            {
                path: 'auth/register',
                element: <Register />,
            },
            {
                path: 'auth/login',
                element: <Login />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} >
                <App />
            </RouterProvider>
        </Provider>
    // </React.StrictMode>
    ,
)
