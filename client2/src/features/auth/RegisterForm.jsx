import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { formExited, register } from "./authSlice"
import validations from "../../utils/usersValidations"
import { Link, useNavigate } from "react-router-dom"

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { status, error, user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (status === 'succeeded') navigate('/');
        if (user) navigate('/');

        return () => {
            dispatch(formExited());
        }
    }, [status, user, navigate, dispatch]);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value})

        setErrors({...errors, [property]: validations[property](value, 'register')})

        setResponse('')
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let hasErrors = false;
        const errorsForm = {}
        for ( const [key, value] of Object.entries(userData) ) {
            errorsForm[key] = validations[key](value, 'register')
            if ( errorsForm[key] ) hasErrors = true;
        }

        setErrors({...errorsForm})
        
        if ( hasErrors ) {
            return
        }

        dispatch(register(userData));
    }

    const [response, setResponse] = useState('')
    useEffect(() => {
        if ( status === 'pending') {
            setResponse(<span>Loading...</span>)
        } else if (status === 'succeeded' ) {
            setResponse(<span>Se ha registrado</span>)
        } else if (status === 'error' ) {
            if ( typeof error === 'string') {
                
                setResponse(
                    <ul>
                        <li>{error}</li>
                    </ul>
                )
            } else {
                const list = Object.values(error).map(e => <li key={e}>{e}</li>)
                setResponse(
                    <ul>
                        {list}
                    </ul>
                )            
            }
        }
    }, [status, error])
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-purple-400 border-t-8">
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                        <input type="text" id="name" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Nombre" name="name"  onChange={handleChange}/>
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ errors.name }</div>
                    </div>
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input type="text" id="email" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Email" name="email"  onChange={handleChange}/>
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ errors.email }</div>
                    </div>

                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input type="password" className="shadow appearance-none text-sm border border-red rounded w-full py-2 px-3 text-grey-darker" id="password" placeholder="************" name="password"  onChange={handleChange} />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ errors.password }</div>
                    </div>

                    <div className="flex flex-col mt-2 mb-1">
                        <button className="bg-purple-500 w-full text-sm hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            Crear cuenta
                        </button>
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ response }</div>
                    </div>
                </div>

            </form>
            <div className="text-center">
                <p className="text-grey-dark text-sm text-slate-500">¿Ya tienes una cuenta? <Link to='/account/login' className="no-underline text-blue font-bold text-purple-400 hover:text-purple-500">Ingresar</Link>.</p>
            </div>
        </>
    )
}

export default RegisterForm