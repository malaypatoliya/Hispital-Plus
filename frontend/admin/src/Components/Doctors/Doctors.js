import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from '../Nav';
import Sidebar from "../Sidebar";

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        let result = await fetch('http://localhost:5000/doctors');
        result = await result.json();
        setDoctors(result);
    }
    // console.log(doctors);


    const deleteDoctor = async (id) => {
        // console.log(id)
        let result = await fetch(`http://localhost:5000/doctors/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert('Record is Deleted !!!')
            getDoctors();
        }
    }

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">


                        <h2 className="headingTitle">Doctors</h2>

                        <button className="btn btn-primary"><NavLink className="addBTN" to='/add-doctor'>Add New Doctor</NavLink></button>
                        {
                            doctors.length > 0 ? <table className="mytable scroll">
                                    <thead>
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Operation</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Area</th>
                                            <th>City</th>
                                            <th>Contact No.</th>
                                            <th>Specialization</th>
                                            <th>Experience</th>
                                            <th>Degree</th>
                                            <th>Clinic Name</th>
                                            <th>Opening Time</th>
                                            <th>Closing Time</th>
                                            <th>Location</th>
                                            <th>ICU</th>
                                            <th>BED</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            doctors.map((doctor, index) => (
                                                <tr key={doctor._id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <NavLink className="btn btn-success" to={`/update-doctor/${doctor._id}`} >UPDATE</NavLink>
                                                        <button className="btn btn-danger" onClick={()=>deleteDoctor(doctor._id)}>DELETE</button>
                                                    </td>
                                                    <td>{doctor.name}</td>
                                                    <td>{doctor.address}</td>
                                                    <td>{doctor.area}</td>
                                                    <td>{doctor.city}</td>
                                                    <td>{doctor.contact_no}</td>
                                                    <td>{doctor.specialization}</td>
                                                    <td>{doctor.experience} years</td>
                                                    <td>{doctor.degree}</td>
                                                    <td>{doctor.clinic_name}</td>
                                                    <td>{doctor.opening_time} AM</td>
                                                    <td>{doctor.closing_time} PM</td>
                                                    <td><a className="btn btn-success" target="_blank" href={doctor.location} >Map</a></td>
                                                    <td>{doctor.icu_aval}</td>
                                                    <td>{doctor.bed_aval}</td>
                                                </tr>
                                            ))

                                        }
                                    </tbody>
                                </table>
                                : '' }
                                {
                                doctors.length < 0 ?
                                <h4 className="alertTitle">Doctors Not Available... Please contact admin</h4> : ''
                        }


                    </div>
                </div>
            </div>



        </>
    );
}

export default Doctors;
