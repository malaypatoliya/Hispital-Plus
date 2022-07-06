import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from '../Nav';
import Sidebar from "../Sidebar";

const BloodBanks = () => {

    const [bloodBank, setBloodBank] = useState([]);

    useEffect(() => {
        getBloodBanks();
    }, []);

    const getBloodBanks = async () => {
        let result = await fetch('http://localhost:5000/blood-banks');
        result = await result.json();
        setBloodBank(result);
    }

    const deleteBloodBank = async (id) => {
        // console.log(id)
        let result = await fetch(`http://localhost:5000/blood-bank/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert('Record is Deleted !!!')
            getBloodBanks();
        }
    }

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">


                        <h2 className="headingTitle">Blood Banks</h2>

                        <button className="btn btn-primary"><NavLink className="addBTN" to='/add-blood-bank'>Add New Blood Bank</NavLink></button>
                        {
                            bloodBank.length > 0 ? <table className="mytable scroll">
                                    <thead>
                                        <tr>
                                            <th>Sr No.</th>
                                            <th>Operation</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Area</th>
                                            <th>City</th>
                                            <th>Contact No.</th>
                                            <th>Location</th>
                                            <th>Blood Groups</th>
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            bloodBank.map((bloodBank, index) => (
                                                <tr key={bloodBank._id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <NavLink className="btn btn-success" to={`/update-blood-bank/${bloodBank._id}`} >UPDATE</NavLink>
                                                        <button className="btn btn-danger" onClick={()=>deleteBloodBank(bloodBank._id)}>DELETE</button>
                                                    </td>
                                                    <td>{bloodBank.name}</td>
                                                    <td>{bloodBank.address}</td>
                                                    <td>{bloodBank.area}</td>
                                                    <td>{bloodBank.city}</td>
                                                    <td>{bloodBank.contact_no}</td>
                                                    <td><a className="btn btn-success" target="_blank" href={bloodBank.location} >Map</a></td>
                                                    <td>
                                                        <b>A + : </b> {bloodBank.AP} <br></br>
                                                        <b>A - : </b> {bloodBank.AN} <br></br>
                                                        <b>B + : </b> {bloodBank.BP} <br></br>
                                                        <b>B - : </b> {bloodBank.BN} <br></br>
                                                        <b>AB + : </b> {bloodBank.ABP} <br></br>
                                                        <b>AB - : </b> {bloodBank.ABN} <br></br>
                                                        <b>O + : </b> {bloodBank.OP} <br></br>
                                                        <b>O - : </b> {bloodBank.ON} <br></br>
                                                    </td>
                                                </tr>
                                            ))

                                        }
                                    </tbody>
                                </table>: '' }
              {
              bloodBank.length < 0 ?
              <h4 className="alertTitle">Blood Banks Not Available... Please contact admin</h4> : ''
                        }


                    </div>
                </div>
            </div>



        </>
    );
}

export default BloodBanks;
