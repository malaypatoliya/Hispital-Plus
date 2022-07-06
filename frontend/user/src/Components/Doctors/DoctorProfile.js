// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DoctorProfile() {
  const params = useParams();

  const [name, setName] = useState("");
  const [mapurl, setMapURL] = useState("");
  const [experience, setExperience] = useState("");
  const [degree, setDegree] = useState("");
  const [address, setAddress] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [openTiming, setOpenTiming] = useState("");
  const [closeTiming, setCloseTiming] = useState("");
  const [icu, setIcu] = useState("");
  const [bed, setBed] = useState("");
  

  useEffect(() => {
    // console.log(params.id)
    getDoctorDetail();
  }, []);

  const getDoctorDetail = async () => {
    let result = await fetch(
      `http://localhost:5000/doctors/${params.id}`
    );
    result = await result.json();
    console.log(result);
    setName(result.name);
    setClinicName(result.clinic_name);
    setAddress(result.address + " , " + result.area + " , " + result.city);
    setDegree(result.degree);
    setExperience(result.experience);
    setContactNumber(result.contact_no);
    setSpecialization(result.specialization);
    setOpenTiming(result.opening_time);
    setCloseTiming(result.closing_time);
    setIcu(result.icu_aval);
    setBed(result.bed_aval);
    setMapURL(result.location);
  };

  return (
    <>
      <div
        className="card mb-3 mt-5 profiledr bg-light"
        style={{ maxWidth: "740px", margin: "0 auto" }}
      >
        <div className="row ">
          <div className="col-md-5 p-5">
            <img
              src="https://media.istockphoto.com/vectors/doctor-icon-vector-id519280527?b=1&k=20&m=519280527&s=612x612&w=0&h=iYkrWjR-AOdfTVJNbztOTpVaNcJvw6njvH-RkRcmz3E="
              className="img-fluid rounded-start"
              alt="..."
            />
            <h3 className="card-title  mt-5 drname">Dr. {name}</h3>
            <p className="card-text pr mt-5 subtitle">
              <i className="fas fa-graduation-cap"> DEGREE</i>
            </p>
            <hr></hr>
            <p className="card-text">{degree}</p>
            <p className="card-text pr mt-5">
              <i class="fas fa-stethoscope"> SPECIALIZATION</i>
            </p>
            <hr></hr>
            <p className="card-text">{specialization}</p>
            <p className="card-text pr mt-5">
            <i class="fas fa-question"> AVAILABLE</i>
            </p>
            <hr></hr>
            <p className="card-text">ICU :- {icu}</p>
            <p className="card-text">BED :- {bed}</p>
          </div>

          <div className="col-md-7 p-5">
            <div className="card-body">
            <p className="card-text pr">
                <i class="fas fa-clinic-medical"> CLINIC NAME</i>
              </p>
              <hr></hr>
              <p className="card-text">{clinicName}</p>
              <p className="card-text mt-5  pr">
                <i class="fas fa-map-marker-alt"> ADDRESS</i>
              </p>
              <hr></hr>
              <p className="card-text">{address}</p>
              <button type="submit" className="btn btn-primary app" >
                <a href={mapurl} target="_blank"> Open in Map</a>  
                {/* </Link> */}
              </button>
              
              <p className="card-text mt-5 pr ">
                <i class="fas fa-user-md"> EXPERIENCE</i>
              </p>
              <hr></hr>
              <p className="card-text">{experience} years</p>
              
              <p className="card-text mt-5 pr">
                <i class="fas fa-phone-alt"> CONTACT NUMBER</i>
              </p>
              <hr></hr>
              <p className="card-text">{contactNumber}</p>
              <p className="card-text mt-5 pr">
                <i class="far fa-clock"> TIMING</i>
              </p>
              <hr></hr>
              <p className="card-text">{openTiming}:00 AM -- {closeTiming}:00 PM</p>

              <button type="submit" className="btn btn-primary mt-5 bookApointment">
                <Link
                  to={`/appointments/${name}`}
                >
                  Book Appointment
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
