import { useState, useEffect } from "react";

function BloodBanks() {
  const [bloodBank, setBloodbank] = useState([]);
  const [area, setArea] = useState("");

  useEffect(() => {
    getDetails();
  }, []);


  const getDetails = async () => {
    let result = await fetch("http://localhost:5000/blood-banks");
    result = await result.json();
    setBloodbank(result);
  };

  // console.log(details);


  const searchHandle = (e) => {
    e.preventDefault();
    const filteredProductsItem = bloodBank.filter((currentProduct) => {

      if (area !== undefined && area !== "") {
        return currentProduct.area === area;
      }else {
        return currentProduct;
      }
    });
    setBloodbank(filteredProductsItem);
  }

  return (
    <>
      <div className="row p-2 my-5 justify-content-center " >

        <div class="col-auto" >

          <input type="text" class="form-control searcharea" value={area} onChange={(e) => setArea(e.target.value)} placeholder="Search Area" />
        </div>
        <div class="col-auto">
          <button className="btn" style={{ backgroundColor: "#0CB8B6" }} onClick={searchHandle} > <i class="far fa-search"></i> </button>
        </div>

      </div>
      <h2 className="doctorlist"> Blood Banks</h2>
      <div style={{ width: "90%", margin: " auto" }} >
        <div className="row m-3"  >
          {
            bloodBank.length > 0 ?

              bloodBank.map((item, index) => (
                <>
                  <div class="col-sm-4 my-2 ">
                    <div class="card bg-light doctorcard" style={{ borderRadius: "2%", marginLeft: "10px", marginTop: "10px", minHeight: "145px" }} >
                      <div class="card-body" >
                        <h4 class="card-title mb-3"> {item.name}</h4>
                        <p class="card-text"></p>
                        <p className="mb-1"><b>Address :</b> {item.address},<br></br> {item.area}, {item.city}</p>
                        <p className="mb-1">  <b>Contact No. :</b> +91 {item.contact_no}</p>
                        <div className="row mt-1">  <b>Available Blood Groups :</b><br></br>
                              <div className="col">
                                <b>A+ </b> {item.AP} <br></br>
                                <b>A- </b>{item.AN} <br></br>
                                <b>B+ </b>{item.BP} <br></br>
                                <b>B- </b>{item.BN} <br></br>
                              </div>
                              <div className="col">
                                <b>AB+ </b>{item.ABP} <br></br>
                                <b>AB- </b>{item.ABN} <br></br>
                                <b>O+ </b>{item.OP} <br></br>
                                <b>O- </b>{item.ON} <br></br>
                              </div>
                        </div>
                          <button type="submit" className="btn btn-primary app mt-2" >
                            <a href={item.location} target="_blank"> Open in Map</a>
                          </button>
                      </div>
                    </div>
                  </div>
                </>
              ))
              : '' }
              {
              bloodBank.length < 0 ?
              <h4 className="alertTitle">Blood Banks Not Available... Please contact admin</h4> : ''
          }
        </div>
      </div>
    </>
  );

}

export default BloodBanks;
