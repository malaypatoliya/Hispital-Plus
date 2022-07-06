import Nav from '../Nav';
import Sidebar from "../Sidebar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateMedical = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [contact_no, setContact] = useState('');
    const [location, setLocation] = useState('');

    const [errorMsg, setErrorMsg] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(params); 
        getMedicalDetails();
    }, [])

    const getMedicalDetails = async () => {

        // console.log(params.id);
        let result = await fetch(`http://localhost:5000/medical/${params.id}`);
        result = await result.json();
        // console.log(result);

        setName(result.name);
        setLocation(result.location);
        setAddress(result.address);
        setArea(result.area);
        setCity(result.city);
        setContact(result.contact_no);
    }

    const updateDoctorHandler = async () => {

        if(!name || !address || !area || !city || !contact_no || !location){
            setErrorMsg(true);
            return false; // stop execution
        }

        let result = await fetch(`http://localhost:5000/update-medical/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, location ,address, area, city, contact_no }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.log(result);
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
                            <h3 className="headingTitle">UPDATE Medical Store</h3>

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

                            <button className="btn btn-primary" onClick={updateDoctorHandler} type="button">Update</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default UpdateMedical;