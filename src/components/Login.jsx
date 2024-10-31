import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import AuthContext from "../context/AuthContext";

const LOGIN_URL = '/auth'

const Login = () => {
    const { setAuth } = useContext(AuthContext);
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

            console.log(response?.data);
            console.log(response?.data?.data?.accessToken);
            console.log(response?.data?.data?.roles);
            const accessToken = response.data.data.accessToken;
            const roles = response.data.data.roles;

            setAuth({ user, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);

        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err?.response?.status === 400) {
                setErrMsg('Input cannot empty');
            } else if (err?.response?.status === 404) {
                setErrMsg('User not found');
            } else if (err?.response?.status === 403) {
                setErrMsg('user or password invalid');
            } else {
                setErrMsg('Login failed');
            }
        }
    }
  return (
    <>
        {success ? 
        <section>
            <h1>Success !</h1>
            <Link to="/home">Home</Link>
        </section> 
        : 
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    autoComplete="off"
                    autoFocus={true}
                    placeholder="Username"
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    placeholder="Password"
                />
                <p className={errMsg === '' ? "offscreen" : "error"}>{errMsg}</p>
                <button type="submit" disabled={user === '' || pwd === ''}>Submit</button>     
            </form>
        </section>}
    </>
  )
}

export default Login