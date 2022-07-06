import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState(false);
    // const [errorSameMsg, setSameErrorMsg] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })

    const signUp = async () => {

        if ( !name || !email || !password || !confirmPassword) {
            setErrorMsg(true);
            return false; // stop execution
        }

        // console.log(name, email, password);

        // integrage the register API
        let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json();
        // console.log(result);
        if (result) {
            alert("Register Successfully !!!");
            navigate('/login');
        }
    }

    return (
        <>

            <div className="SignupFormDiv">
                <h3 className="form-heading">SIGN UP</h3>

                <label htmlFor="name">Full Name</label>
                <input className="form-control" id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errorMsg && !name && <p className="errMsg">enter valid name</p>}

                <label htmlFor="email">Email ID</label>
                <input className="form-control" id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errorMsg && !email && <p className="errMsg">enter valid email id</p>}

                <label htmlFor="pass">Password</label>
                <input className="form-control" id='pass' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                {errorMsg && !password && <p className="errMsg">enter valid password</p>}
                {/* {errorSameMsg && !password && <p className="errMsg">enter valid password</p>} */}

                <label htmlFor="cpass">Confirm Password</label>
                <input className="form-control" id='cpass' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                {errorMsg && !confirmPassword && <p className="errMsg">enter valid confirm password</p>}
                {/* {errorSameMsg && !confirmPassword && <p className="errMsg">enter valid password</p>} */}

                {/* <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input className="form-control" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" /> */}
                
                <button className="btn btn-primary" onClick={signUp} type="button">Sign Up</button>
                <p>Already have an account? <Link to="/login">Log in</Link> </p>

            </div>
        </>
    );
}

export default SignUp;

