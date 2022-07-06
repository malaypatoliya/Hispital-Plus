import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {


    return (
        <>
            <div className="sidebar">
                <ul className="side-Nav">
                    <li><NavLink className="sideItem" to='/'>Home</NavLink></li>
                    <li><NavLink className="sideItem" to='/doctors'>Doctors</NavLink></li>
                    <li><NavLink className="sideItem" to='/medicals'>Medical Stores</NavLink></li>
                    <li><NavLink className="sideItem" to='/blood-banks'>Blood Banks</NavLink></li>
                    <li><NavLink className="sideItem" to='/appointments'>Appointments</NavLink></li>
                    <li><NavLink className="sideItem" to='/queries'>Queries</NavLink></li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar; 