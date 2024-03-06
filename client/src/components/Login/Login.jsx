import { FaUser } from "react-icons/fa";


const Login = () => {

    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                    <h1 className="text-3xl block text-center font-semibold"><FaUser className="inline" /><span className="ml-2" >Login</span></h1>
                    <hr className="mt-3" />
                    <div className="mt-3">
                        <label htmlFor="email" className="block text-base mb-2">Email</label>
                        <input type="text" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Email" />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password" className="block text-base mb-2">Password</label>
                        <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Password" />
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                        <div>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember" className="ml-2">Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className="font-semibold border-2 border-indigo-500 bg-indigo-500 text-white py-1 w-full rounded-md hover:bg-indigo-600 ">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;