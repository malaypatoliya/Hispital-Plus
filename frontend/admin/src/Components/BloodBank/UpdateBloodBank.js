import Nav from '../Nav';
import Sidebar from "../Sidebar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBloodBank = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [contact_no, setContact] = useState('');
    const [location, setLocation] = useState('');
    const [AP, setAP] = useState(undefined);
    const [AN, setAN] = useState(undefined);
    const [BP, setBP] = useState(undefined);
    const [BN, setBN] = useState(undefined);
    const [ABP, setABP] = useState(undefined);
    const [ABN, setABN] = useState(undefined);
    const [OP, setOP] = useState(undefined);
    const [ON, setON] = useState(undefined);

    const [errorMsg, setErrorMsg] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getBloodBankDetails();
    }, [])

    const getBloodBankDetails = async () => {

        // console.log(params.id);
        let result = await fetch(`http://localhost:5000/bloodbank/${params.id}`);
        result = await result.json();
        // console.log(result);

        setName(result.name);
        setLocation(result.location);
        setAddress(result.address);
        setArea(result.area);
        setCity(result.city);
        setContact(result.contact_no);
        setAP(result.AP);
        setAN(result.AN);
        setBP(result.BP);
        setBN(result.BN);
        setABP(result.ABP);
        setABN(result.ABN);
        setOP(result.OP);
        setON(result.ON);
    }

    const updateDoctorHandler = async () => {

        if(!name || !address || !area || !city || !contact_no || !location || !AP || !AN || !BP || !BN || !ABP || !ABN || !OP || !ON ){
            setErrorMsg(true);
            return false; // stop execution
        }

        let result = await fetch(`http://localhost:5000/update-blood-bank/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, address, area, city, contact_no, location, AP, AN, BP, BN, ABP, ABN, OP, ON }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.log(result);
        navigate('/blood-banks');
    }

    return (
        <>

            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">

                        <div className="formWidth">
                            <h3 className="headingTitle">UPDATE BLOOD BANK</h3>

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

                            <label>Blood Avialable?</label><br></br><br></br>
                            <label htmlFor="blood">A+ (positive)</label>
                            <select className="form-control" id='AP' value={AP} onChange={(e) => setAP(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !AP && <p className="errMsg">Enter valid A positive blood avialablity</p>}

                            <label htmlFor="AN">A- (negative)</label>
                            <select className="form-control" id='AN' value={AN} onChange={(e) => setAN(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !AN && <p className="errMsg">Enter valid A negative blood avialablity</p>}

                            <label htmlFor="BP">B+ (positive)</label>
                            <select className="form-control" id='BP' value={BP} onChange={(e) => setBP(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !BP && <p className="errMsg">Enter valid B positive blood avialablity</p>}

                            <label htmlFor="BN">B- (negative)</label>
                            <select className="form-control" id='BN' value={BN} onChange={(e) => setBN(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !BN && <p className="errMsg">Enter valid B negative blood avialablity</p>}


                            <label htmlFor="ABP">AB+ (positive)</label>
                            <select className="form-control" id='ABP' value={ABP} onChange={(e) => setABP(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !ABP && <p className="errMsg">Enter valid AB positive blood avialablity</p>}

                            <label htmlFor="ABN">AB- (negative)</label>
                            <select className="form-control" id='ABN' value={ABN} onChange={(e) => setABN(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !ABN && <p className="errMsg">Enter valid AB negative blood avialablity</p>}

                            <label htmlFor="OP">O+ (positive)</label>
                            <select className="form-control" id='OP' value={OP} onChange={(e) => setOP(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !OP && <p className="errMsg">Enter valid O positive blood avialablity</p>}

                            <label htmlFor="ON">O- (negative)</label>
                            <select className="form-control" id='ON' value={ON} onChange={(e) => setON(e.target.value)} >
                            <option value={undefined} selected disabled>Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !ON && <p className="errMsg">Enter valid O negative blood avialablity</p>}


                            <button className="btn btn-primary" onClick={updateDoctorHandler} type="button">Update</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default UpdateBloodBank;