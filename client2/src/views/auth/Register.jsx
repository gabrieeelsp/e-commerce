import { useNavigate } from "react-router-dom";
import RegisterForm from "../../features/auth/RegisterForm"
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Register = () => {

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
                        { !user && <RegisterForm />}
                    </div>
                </div>
            }
        </>
    )
}

export default Register