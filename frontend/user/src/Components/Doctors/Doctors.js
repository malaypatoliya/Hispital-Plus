import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";



function Doctors() {
  const [doctors, setDoctors] = useState([]);
  // const [details, setDetails] = useState([]);
  const [area, setArea] = useState(undefined);
  const [specialization, setSpecialization] = useState(undefined);


  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch("http://localhost:5000/doctors");
    result = await result.json();
    console.log(result);
    setDoctors(result);
  };
  console.log(doctors);


  const filterProducts = (e) => {
    e.preventDefault();
    const filteredProductsItem = doctors.filter((currentProduct) => {

      if (area !== undefined && specialization !== undefined) {
        return currentProduct.area === area && currentProduct.specialization === specialization;
      } else if (area !== undefined) {
        return currentProduct.area === area;
      } else if (specialization !== undefined) {
        return currentProduct.specialization === specialization;
      } else {
        return currentProduct;
      }

    });
    setDoctors(filteredProductsItem);
  }


  return (
    <>
      <div className="dd">
        <div className="row p-2 my-5 " >
          <form className="row gy-2 gx-3 justify-content-center ">
            <div className="col-auto ">
              <input type="text" className="form-control searcharea" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Search Area" />
            </div>

            <div className="col-auto ">
              <select value={specialization} onChange={(e) => setSpecialization(e.target.value)} className="form-select ">

                <option value={undefined} selected disabled>Select Specialization</option>
                <option value="Surgeon">Surgeon</option>
                <option value="Eye Specialist">Ophthalmologist</option>
                <option value="Dentist">Dentist</option>
                <option value="Cardiologist">Cardiologist</option>
                <option value="Homeopethic">Homeopethic</option>

              </select>

            </div>

            <div className="col-auto">
              <button className="btn" style={{ backgroundColor: "#0CB8B6" }} onClick={filterProducts} >  <i className="far fa-search"></i> </button>
            </div>
          </form>
        </div>


        <h2 className="doctorlist"> Doctors</h2>
        <div style={{ width: "90%", margin: " auto" }} >
          <div className="row m-3"  >
            {
              doctors.length > 0 ?


              doctors.map((doctor, index) => (
                <>
                  <div key={index} className=" col-md-4 my-2">
                    <div className="card doctorcard " >
                      <div className="card-body bg-light" >
                        <h5 className="card-title">{doctor.name}</h5>
                        <p className="card-text">
                          Specialization : {doctor.specialization}<br></br>
                          Area : {doctor.area}

                        </p>


                        <Link to={`/doctor-profile/${doctor._id}`} style={{ textDecoration: "none" }}><button className="btn viewprofile">View Profile</button></Link>

                      </div>
                    </div>
                  </div>
                </>
              ))
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
