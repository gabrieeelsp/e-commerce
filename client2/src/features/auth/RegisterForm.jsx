import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { formExited, register } from "./authSlice"
import validations from "../../utils/usersValidations"
import { useNavigate } from "react-router-dom"

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

    let response;
    if ( status === 'pending') {
        response = <span>Loading...</span>
    } else if (status === 'succeeded' ) {
        response = <span>Se ha registrado</span>
    } else if (status === 'error' ) {
        if ( typeof error === 'string') {
            
            response = (
                <ul>
                    <li>{error}</li>
                </ul>
            )
        } else {
            const list = Object.values(error).map(e => <li key={e}>{e}</li>)
            response = (
                <ul>
                    {list}
                </ul>
            )            
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" onChange={handleChange}  />
                    <div className="form-text">{ errors.name }</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" name="email"  onChange={handleChange} />
                    <div className="form-text">{ errors.email }</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password"  onChange={handleChange} />
                    <div className="form-text">{ errors.password }</div>
                </div>
                <div className="d-flex">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    { response }
                </div>
                
            </form>
        </>
    )
}

export default RegisterForm