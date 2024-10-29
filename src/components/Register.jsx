import { useState, useEffect } from "react";

const Register = () => {
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirm, setConfirm] = useState('');
    const [validInput, setValidInput] = useState(false);

    useEffect(() => {
        setValidInput(pwd === confirm && pwd !=='' && user !=='');
    }, [pwd, confirm, user])

    return (
        <form>
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

            <p className={validInput || user === '' || pwd === '' || confirm === '' ? "offscreen" : "instruction"}>Please fill input correctly</p>

            <button type="submit" disabled={!validInput}>Submit</button>
        </form>
    )
}

export default Register