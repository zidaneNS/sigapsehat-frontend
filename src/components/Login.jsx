import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import AuthContext from "../context/AuthContext";
import Zidane from '../components/Asset/zidane.jpg';

const LOGIN_URL = '/auth'

const Login = ({ setUpdated }) => {
    const { setAuth, persist, setPersist } = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [pwd, user])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ userName: user, password: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            const accessToken = response.data.data.accessToken;
            const roles = response.data.data.roles;

            setAuth({ user, roles, accessToken });
            setUser('');
            setPwd('');
            setUpdated(true);
            setSuccess(true);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err?.response?.status === 400) {
                setErrMsg('Input cannot be empty');
            } else if (err?.response?.status === 404) {
                setErrMsg('User not found');
            } else if (err?.response?.status === 403) {
                setErrMsg('Invalid username or password');
            } else {
                setErrMsg('Login failed');
            }
        }
    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist);
    }, [persist])

    return (
        <>
            {success ? 
            <section className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Success!</h1>
                <Link to="/home" className="text-blue-600 hover:underline">Go to Home</Link>
            </section> 
            : 
            <section className="flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                    
                    {/* Form Section */}
                    <div className="w-full md:w-1/2 p-8">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign In</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            <label htmlFor="username" className="block text-gray-600 text-sm font-medium">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                autoComplete="off"
                                placeholder="Username"
                                className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />

                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                placeholder="Password"
                                className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />

                            <p className={`${errMsg ? "text-red-500 text-sm mt-2" : "hidden"}`}>{errMsg}</p>
                            
                            <button 
                                type="submit" 
                                disabled={user === '' || pwd === ''}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed mt-4"
                            >
                                Sign In
                            </button>     

                            <div className="flex items-center justify-between mt-4">
                                <label htmlFor="persist" className="text-sm text-gray-600">
                                    <input 
                                        type="checkbox"
                                        id="persist"
                                        checked={persist}
                                        onChange={togglePersist}
                                        className="mr-1"
                                    />
                                    Remember me
                                </label>
                                <Link to="/register" className="text-blue-500 text-sm hover:underline">Forgot password?</Link>
                            </div>
                            
                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600">Don't have an account? <Link to="/register" className="text-blue-500 hover:underline">Register</Link></p>
                            </div>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="hidden md:block md:w-1/2">
                        <img 
                            src={Zidane} 
                            alt="Login Visual" 
                            className="w-full h-full object-cover"/>
                    </div>
                </div>
            </section>}
        </>
    )
}

export default Login;
