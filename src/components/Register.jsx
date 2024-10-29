import { useState, useEffect } from "react";
import axios from '../api/axios';

const REGISTER_URL = '/register';

const Register = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    const [validInput, setValidInput] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setValidInput(pwd === confirm && pwd !=='' && user !=='');
        setErrMsg('');
    }, [pwd, confirm, user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validInput) {
            setErrMsg('invalid input');
            return
        }

        try {
            const response = await axios.post(REGISTER_URL, JSON.stringify({ userName:user, password:pwd }), {
                headers: { 'Content-Type': 'application/json' }
            });

            console.log(response?.data);
            console.log(response?.data?.data?.refreshToken);
            setSuccess(true);
            setUser('');
            setPwd('');
            setConfirm('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('username already taken');
            } else {
                setErrMsg('Registration Failed');
            }
        }
    }


    return (
        <>
            {success ? 
            (<section>
                <h1>Success</h1>
                <a href="#">Sign in</a>
            </section>) 
            : 
            (<section>
                <form onSubmit={handleSubmit}>
                    <h1>Register:</h1>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Username"
                        autoComplete="off"
                        autoFocus={true}
                    />

                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                        placeholder="Password"
                    />
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input 
                        type="password" 
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        placeholder="Confirm Password"
                    />

                    <p className={errMsg === '' ? "offscreen" : "error"}>{errMsg}</p>

                    <p className={validInput || (user === '' && pwd === '' && confirm === '') ? "offscreen" : "instruction"}>Please fill input correctly</p>

                    <button type="submit" disabled={!validInput}>Submit</button>
                </form>
            </section>)}
        </>
    )
}

export default Register