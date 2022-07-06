import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddMedical = () => {

    const [pname, setPname] = useState('');
    const [contact_no, setContact] = useState('');
    const [proof, setProof] = useState(undefined);
    const [proof_no, setProofNo] = useState('');
    const [slot, setSlot] = useState(undefined);
    const [adate, setAdate] = useState('');

    // const [area, setArea] = useState('');
    // const [city, setCity] = useState('');
    // const [location, setLocation] = useState('');
    
    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();

    const params = useParams();
    const dname = params.name;

    const addMedicalHandler = async () => {

        if (!pname || !dname || !contact_no || !proof || !proof_no || !slot || !adate) {
            setErrorMsg(true);
            return false; // stop execution
        }
        console.log(pname, dname, contact_no, proof, proof_no, slot, adate);
        let result = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            body: JSON.stringify({ pname, dname, contact_no, proof, proof_no, slot, adate }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result._id);
        alert(`Your Appointments has been Booked Successfully !!! \n\n Appointment Details : \n     ID : ${result._id} \n     Doctor Name : ${dname}\n     Date : ${result.adate} \n     Slot : ${result.slot}`);
        navigate('/');
    }


    return (
        <>

            <div className="bookingDiv">

                <div>
                    <h3 align="center" className="mb-3 mt-3">Appointment Letter <i class="far fa-calendar-check"></i></h3>

                    <label>
                        <i className="far fa-user-injured mt-3"></i> Patient Name
                    </label>
                    <input className="form-control ina mt-1" id='name' type="text" value={pname} onChange={(e) => setPname(e.target.value)} />
                    {errorMsg && !pname && <p className="errMsg">Enter valid name</p>}

                    <label>
                        <i className="far fa-user-md mt-3"></i> Doctor's Name
                    </label>
                    <input className="form-control ina mt-1" id='name' type="text" value={dname} />

                    <label>
                        <i className="fad fa-phone mt-3"></i> Your Contact Number
                    </label>
                    <input className="form-control ina" id='contact' type="number" value={contact_no} onChange={(e) => setContact(e.target.value)} />
                    {errorMsg && !contact_no && <p className="errMsg">Enter valid contact number</p>}

                    <label>
                        <i className="fal fa-id-card mt-3"></i> Identity Proof
                    </label>
                    <select className="form-control ina" id='proof' value={proof} onChange={(e) => setProof(e.target.value)} >
                        <option value={undefined} selected disabled>Select</option>
                        <option value="Adhar Card">Adhar Card</option>
                        <option value="Voter Card">Voter Card</option>
                        <option value="Pan Card">Pan Card</option>
                    </select>
                    {errorMsg && !proof && <p className="errMsg">Enter valid proof</p>}

                    <label>
                        <i className="far fa-pen mt-3"></i> Identity proof Number
                    </label>
                    <input className="form-control ina" id='proofNo' type="number" value={proof_no} onChange={(e) => setProofNo(e.target.value)} />
                    {errorMsg && !proof_no && <p className="errMsg">Enter valid identify proof number</p>}

                    <label>
                        <i className="far fa-users mt-3"></i> Select Slot
                    </label>
                    <select className="form-control ina" id='openTime' value={slot} onChange={(e) => setSlot(e.target.value)} >
                        <option value={undefined} selected disabled>Select</option>
                        <option value="9 AM - 10 AM">9 AM - 10 AM</option>
                        <option value="10 AM - 11 AM">10 AM - 11 AM</option>
                        <option value="11 AM - 12 PM">11 AM - 12 PM</option>
                        <option value="12 PM - 1 PM">12 PM - 1 PM</option>
                        <option value="1 PM - 2 PM">1 PM - 2 PM</option>
                        <option value="2 PM - 3 PM">2 PM - 3 PM</option>
                        <option value="3 PM - 4 PM">3 PM - 4 PM</option>
                        <option value="4 PM - 5 PM">4 PM - 5 PM</option>
                        <option value="5 PM - 6 PM">5 PM - 6 PM</option>
                        <option value="6 PM - 7 PM">6 PM - 7 PM</option>
                        <option value="7 PM - 8 PM">7 PM - 8 PM</option>
                    </select>
                    {errorMsg && !slot && <p className="errMsg">Enter valid slot</p>}

                    <label>
                        <i className="far fa-calendar-alt mt-3"></i> Appointment Date
                    </label>
                    <input className="form-control ina" id='adate' type="date" value={adate} onChange={(e) => setAdate(e.target.value)} />
                    {errorMsg && !adate && <p className="errMsg">Enter valid appointment date</p>}

                    <button className="btn btn-primary mt-4 bg-light bookBtn" onClick={addMedicalHandler} type="button">Book Appointment</button>
                </div>

            </div>

        </>
    );
}

export default AddMedical;