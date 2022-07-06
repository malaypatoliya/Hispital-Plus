import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loginError, setLoginError] = useState(false);

    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [])

    const login = async () => {

        if (!email || !password) {
            setErrorMsg(true);
            return false; // stop execution
        }

        // console.log(email, password);

        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        // console.log(result);

        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            navigate('/');
        } else {
            // setErrorMsg(true);
            alert('please enter correct details');

        }
    }



    return (
        <>
            <div className="loginFormDiv">
                <h3 className="form-heading">LOGIN</h3>
                {/* {errorMsg && !loginError && <p className="errMsg">Invalid Login Details</p>} */}

                <label htmlFor="email">Email ID</label>
                <input className="form-control" id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errorMsg && !email && <p className="errMsg">enter valid email id</p>}

                <label htmlFor="password">Password</label>
                <input className="form-control" id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errorMsg && !password && <p className="errMsg">enter valid password</p>}

                <button className="btn btn-primary" onClick={login} type="button">Login</button>
                <p>Don't have an account? <Link to="/signup">Create an account</Link> </p>

            </div>

        </>
    );
}

export default Login;