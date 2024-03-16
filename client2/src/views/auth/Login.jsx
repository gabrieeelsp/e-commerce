import { useEffect } from "react";
import LoginForm from "../../features/auth/LoginForm"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {

    const navigate = useNavigate()

    const { user, verified } = useSelector((state) => state.auth)

    useEffect(() => {
        if (user) navigate('/');

    }, [navigate, user]);
    return (
        <>
            { verified && 
                <div className="flex justify-center">
                    <div className="w-96">
                        { !user && <LoginForm />}
                    </div>
                </div>
            }
        </>
    )
}

export default Login