import Nav from '../Nav';
import Sidebar from "../Sidebar";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateDoctor = () => {
    const [name, setName] = useState('');
    const [specialization, setSpecialization] = useState(undefined);
    const [degree, setDegree] = useState(undefined);
    const [clinic_name, setClinicName] = useState('');
    const [location, setLocation] = useState('');


    const [address, setAddress] = useState('');
    const [area, setArea] = useState('');
    const [city, setCity] = useState('');
    const [contact_no, setContact] = useState('');
    const [experience, setExperience] = useState('');
    const [opening_time, setOpenTime] = useState(undefined);
    const [closing_time, setCloseTime] = useState(undefined);
    const [icu_aval, setIcu] = useState(undefined);
    const [bed_aval, setBed] = useState(undefined);

    const [errorMsg, setErrorMsg] = useState(false);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // console.log(params); 
        getDoctorDetails();
    }, [])

    const getDoctorDetails = async () => {

        // console.log(params.id);
        let result = await fetch(`http://localhost:5000/doctors/${params.id}`);
        result = await result.json();
        // console.log(result);

        setName(result.name);
        setSpecialization(result.specialization);
        setDegree(result.degree);
        setClinicName(result.clinic_name);
        setLocation(result.location);

        setAddress(result.address);
        setArea(result.area);
        setCity(result.city);
        setContact(result.contact_no);
        setExperience(result.experience);
        setOpenTime(result.opening_time);
        setCloseTime(result.closing_time);
        setIcu(result.icu_aval);
        setBed(result.bed_aval);
    }

    const updateProductHandler = async () => {

        if(!name || !address || !area || !city || !contact_no || !specialization || !experience || !degree || !clinic_name || !opening_time || !closing_time || !location || !icu_aval || !bed_aval){
            setErrorMsg(true);
            return false; // stop execution
        }

        // console.log(name, specialization, degree, clinic_name, location ,address, area, city, contact_no, experience, opening_time, closing_time, icu_aval, bed_aval);
        let result = await fetch(`http://localhost:5000/update-doctor/${params.id}`, {
            method: "Put",
            body: JSON.stringify({ name, specialization, degree, clinic_name, location ,address, area, city, contact_no, experience, opening_time, closing_time, icu_aval, bed_aval }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        // console.log(result);
        navigate('/doctors');
    }

    return (
        <>

            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">

                        <div className="formWidth">
                            <h3 className="headingTitle">UPDATE DOCTOR</h3>

                            <label htmlFor="name">Full Name</label>
                            <input className="form-control" id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            {errorMsg && !name && <p className="errMsg">Enter valid name</p>}

                            <label htmlFor="degree">Degree</label>
                            <select className="form-control" id='degree' value={degree} onChange={(e) => setDegree(e.target.value)} >
                                <option value={undefined} selected disabled></option>
                                <option value="MD">MD</option>
                                <option value="MBBS">MBBS</option>
                                <option value="BHMS">BHMS</option>
                                <option value="MS">MS</option>
                                <option value="BDS">BDS</option>
                                <option value="M.Sc">M.Sc</option>
                            </select>
                            {errorMsg && !degree && <p className="errMsg">Enter valid degree</p>}
                            {/* <input className="form-control" id='degree' type="text" value={degree} onChange={(e) => setDegree(e.target.value)}  /> */}

                            <label htmlFor="specialization">Specialization</label>
                            <select className="form-control" id='specialization' value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                                <option value={undefined} selected disabled></option>
                                <option value="Dentist">Dentist</option>
                                <option value="Surgeon">Surgeon</option>
                                <option value="Eye Specialist">Eye Specialist</option>
                                <option value="Ophthalmologist">Ophthalmologist</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Homeopethic">Homeopethic</option>
                            </select>
                            {errorMsg && !specialization && <p className="errMsg">Enter valid specialization</p>}
                            {/* <input className="form-control" id='specialization' type="text" value={specialization} onChange={(e) => setSpecialization(e.target.value)} /> */}

                            <label htmlFor="experience">Experience (in year)</label>
                            <input className="form-control" maxlength="2" id='experience' type="number" value={experience} onChange={(e) => setExperience(e.target.value)} />
                            {errorMsg && !experience && <p className="errMsg">Enter valid experience</p>}

                            <label htmlFor="contact">Contact No.</label>
                            <input className="form-control" id='contact' type="number" value={contact_no} onChange={(e) => setContact(e.target.value)} />
                            {errorMsg && !contact_no && <p className="errMsg">Enter valid contact number</p>}

                            <label htmlFor="clinicName">Clinic Name</label>
                            <input className="form-control" id='clinicName' type="text" value={clinic_name} onChange={(e) => setClinicName(e.target.value)} />
                            {errorMsg && !clinic_name && <p className="errMsg">Enter valid clinic name</p>}

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

                            <label htmlFor="openTime">Opening Time (AM - in hour)</label>
                            <select className="form-control" id='openTime' value={opening_time} onChange={(e) => setOpenTime(e.target.value)} >
                                <option value={undefined} selected disabled></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            {errorMsg && !opening_time && <p className="errMsg">Enter valid opening time</p>}
                            {/* <input className="form-control" id='openTime' type="number" value={openTime} onChange={(e) => setOpenTime(e.target.value)} /> */}

                            <label htmlFor="closeTime">Closing Time (PM - in hour)</label>
                            <select className="form-control" id='closeTime' value={closing_time} onChange={(e) => setCloseTime(e.target.value)} >
                                <option value={undefined} selected disabled></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            {errorMsg && !closing_time && <p className="errMsg">Enter valid closing time</p>}
                            {/* <input className="form-control" id='closeTime' type="number" value={closeTime} onChange={(e) => setCloseTime(e.target.value)} /> */}


                            <label htmlFor="ICU">ICU Avialable?</label>
                            <select className="form-control" id='ICU' value={icu_aval} onChange={(e) => setIcu(e.target.value)} >
                                <option value={undefined} selected disabled></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !icu_aval && <p className="errMsg">Enter valid ICU avialablity</p>}

                            <label htmlFor="BED">Hospital Bed Avialable?</label>
                            <select className="form-control" id='BED' value={bed_aval} onChange={(e) => setBed(e.target.value)} >
                                <option value={undefined} selected disabled></option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                            {errorMsg && !bed_aval && <p className="errMsg">Enter valid BED avialablity</p>}

                            {/* <input className="form-control" type="text" value={icu} onChange={(e) => setIcu(e.target.value)} placeholder="ICU Available" /> */}
                            {/* <input className="form-control" type="text" value={bed} onChange={(e) => setBed(e.target.value)} placeholder="BED Available" /> */}
                            {/* <button className="btn btn-primary" onClick={addProductHandler} type="button">Add</button> */}
                            <button className="btn btn-primary" onClick={updateProductHandler} type="button">Update</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default UpdateDoctor;