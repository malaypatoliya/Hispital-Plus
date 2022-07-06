import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
            <div className="navigationBar">
                <h2 className="logo">ADMIN PANEL</h2>
                {
                    auth ?
                        <ul className="nav-ul">
                            {/* <li><Link to='/'>Products</Link></li> */}
                            {/* <li><Link to='/update'>Update Products</Link></li> */}
                            {/* <li><NavLink className="navItem" to='/profile'>Profile</NavLink></li> */}
                            <li><NavLink className="navItem" to='/login' onClick={logout}>Logout ({JSON.parse(auth).name})</NavLink></li>

                        </ul>
                        :
                        <ul className="nav-ul">
                            <li><NavLink className="navItem" to='/login'>Login</NavLink></li>
                            <li><NavLink className="navItem" to='/signup'>Sign Up</NavLink></li>
                        </ul>
                }
            </div>
        </>
    );
}

export default Nav; 