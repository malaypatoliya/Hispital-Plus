import Nav from '../Nav';
import Sidebar from "../Sidebar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMedical = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [contact_no, setContact] = useState('');
    const [location, setLocation] = useState('');

    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();

    const addMedicalHandler = async () => {

        if(!name || !address || !area || !city || !contact_no || !location ){
            setErrorMsg(true);
            return false; // stop execution
        }
        console.log(name, address, area, city, contact_no, location);

        let result = await fetch('http://localhost:5000/add-medical', {
            method: 'POST',
            body: JSON.stringify({ name, address, area, city, contact_no, location }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        navigate('/medicals');

    }


    return (
        <>

            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">

                        <div className="formWidth">
                            <h3 className="headingTitle">ADD NEW MEDICAL STORES</h3>

                            <label htmlFor="name">Full Name</label>
                            <input className="form-control" id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {errorMsg && !name && <p className="errMsg">Enter valid name</p>}

                            <label htmlFor="contact">Contact No.</label>
                            <input className="form-control" id='contact' type="number" value={contact_no} onChange={(e) => setContact(e.target.value)} />
                            {errorMsg && !contact_no && <p className="errMsg">Enter valid contact number</p>}

                            <label htmlFor="address">Address</label>
                            <input className="form-control" id='address' type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                            {errorMsg && !address && <p className="errMsg">Enter valid address</p>}

                            <label htmlFor="area">Area</label>
                            <input className="form-control" id='area' type="text" value={area} onChange={(e) => setArea(e.target.value)} />
                            {errorMsg && !area && <p className="errMsg">Enter valid area</p>}

                            <label htmlFor="city">City</label>
                            <input className="form-control" id='city' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                            {errorMsg && !city && <p className="errMsg">Enter valid city</p>}

                            <label htmlFor="location">Location (map url)</label>
                            <input className="form-control" id='location' type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                            {errorMsg && !location && <p className="errMsg">Enter valid location</p>}

                            <button className="btn btn-primary" onClick={addMedicalHandler} type="button">Add</button>
                        </div>

                    </div>
                </div>
            </div>

        3
        </>
    );
}

export default AddMedical;