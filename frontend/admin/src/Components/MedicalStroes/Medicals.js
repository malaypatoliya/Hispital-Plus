import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Nav from '../Nav';
import Sidebar from "../Sidebar";

const Medicals = () => {

    const [medicals, setMedicals] = useState([]);

    useEffect(() => {
        getMedicals();
    }, []);

    const getMedicals = async () => {
        let result = await fetch('http://localhost:5000/medicals');
        result = await result.json();
        setMedicals(result);
    }
    // console.log(doctors);


    const deleteMedical = async (id) => {
        // console.log(id)
        let result = await fetch(`http://localhost:5000/medical/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            alert('Record is Deleted !!!')
            getMedicals();
        }
    }

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">


                        <h2 className="headingTitle">Medicals Stores</h2>

                        <button className="btn btn-primary"><NavLink className="addBTN" to='/add-medical'>Add New Medical Store</NavLink></button>
                        {
                            medicals.length > 0 ? <table className="mytable scroll">
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
                                            
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            medicals.map((medicals, index) => (
                                                <tr key={medicals._id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <NavLink className="btn btn-success" to={`/update-medical/${medicals._id}`} >UPDATE</NavLink>
                                                        <button className="btn btn-danger" onClick={()=>deleteMedical(medicals._id)}>DELETE</button>
                                                    </td>
                                                    <td>{medicals.name}</td>
                                                    <td>{medicals.address}</td>
                                                    <td>{medicals.area}</td>
                                                    <td>{medicals.city}</td>
                                                    <td>{medicals.contact_no}</td>
                                                    <td><a className="btn btn-success" target="_blank" href={medicals.location} >Map</a></td>
                                                </tr>
                                            ))

                                        }
                                    </tbody>
                                </table>: '' }
              {
              medicals.length < 0 ?
              <h4 className="alertTitle">Medicals Not Available... Please contact admin</h4> : ''
                        }


                    </div>
                </div>
            </div>



        </>
    );
}

export default Medicals;
