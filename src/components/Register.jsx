import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from '../api/axios';
import Zidane from '../components/Asset/zidane.jpg';

const REGISTER_URL = '/register';

const Register = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    const [validInput, setValidInput] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidInput(pwd === confirm && pwd !== '' && user !== '');
        setErrMsg('');
    }, [pwd, confirm, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validInput) {
            setErrMsg('Invalid input');
            return;
        }

        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({ userName: user, password: pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            setSuccess(true);
            setUser('');
            setPwd('');
            setConfirm('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username already taken');
            } else {
                setErrMsg('Registration Failed');
            }
        }
    };

    return (
        <>
            {success ? 
            (<section className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
                <h1 className="text-3xl font-bold text-blue-700 mb-4">Registration Successful</h1>
                <Link to="/login" className="text-blue-600 hover:underline">Sign in</Link>
            </section>) 
            : 
            (<section className="flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                    
                    {/* Form Section */}
                    <div className="w-full md:w-1/2 p-8">
                        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            <label htmlFor="username" className="block text-gray-600 text-sm font-medium">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                placeholder="Username"
                                autoComplete="off"
                                className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />

                            <label htmlFor="password" className="block text-gray-600 text-sm font-medium">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                placeholder="Password"
                                className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />

                            <label htmlFor="confirm" className="block text-gray-600 text-sm font-medium">Confirm Password</label>
                            <input 
                                type="password" 
                                id="confirm"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="Confirm Password"
                                className="border border-gray-300 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />

                            <div>
                            <p className={`${errMsg ? "text-red-500 text-sm mt-2" : "hidden"}`}>{errMsg}</p>
                            <p className={`${validInput || (user === '' && pwd === '' && confirm === '') ? "hidden" : "text-red-500 text-sm"}`}>
                                Please fill input correctly
                            </p>
                            </div>
                            

                            <button 
                                type="submit" 
                                disabled={!validInput}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed mt-4"
                            >
                                Sign Up
                            </button>     

                            <div className="text-center mt-6">
                                <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></p>
                            </div>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="hidden md:block md:w-1/2">
                        <img 
                            src={Zidane} 
                            alt="LinkedIn Registration"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Footer Section */}
                <div className="absolute bottom-4 text-center w-full">
                    <p className="text-sm text-gray-500">&copy; 2024 SigapSehat. All rights reserved.</p>
                </div>
            </section>)}
        </>
    );
}

export default Register;
