import React, { useState, useEffect } from "react";
import Nav from '../Nav';
import Sidebar from "../Sidebar";

const Appointments = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        getAppointments();
    }, []);

    const getAppointments = async () => {
        let result = await fetch('http://localhost:5000/booking');
        result = await result.json();
        setAppointments(result);
    }


    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">

                        <h2 className="headingTitle">Appointments</h2>
                        {
                            appointments.length > 0 ? <table className="mytable scroll">
                                <thead>
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Patient Name</th>
                                        <th>Contact No.</th>
                                        <th>Identity Proof</th>
                                        <th>Proof Number</th>
                                        <th>Booking Slot</th>
                                        <th>Appointment Date</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        appointments.map((appointment, index) => (
                                            <tr key={appointment._id}>
                                                <td>{index + 1}</td>
                                                <td>{appointment.pname}</td>
                                                <td>{appointment.contact_no}</td>
                                                <td>{appointment.proof}</td>
                                                <td>{appointment.proof_no}</td>
                                                <td>{appointment.slot}</td>
                                                <td>{appointment.adate}</td>
                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table> : <h5 className="err">No Appointment Reamins !!!</h5>
                        }
                    </div>
                </div>
            </div>



        </>
    );
}

export default Appointments;
