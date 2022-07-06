import { useState, useEffect } from "react";

function Medicals() {
  const [details, setDetails] = useState([]);
  const [area, setArea] = useState("");

  useEffect(() => {
    getDetails();
  }, []);


  const getDetails = async () => {
    let result = await fetch("http://localhost:5000/medicals");
    result = await result.json();
    setDetails(result);
  };

  // console.log(details);


  const searchHandle = (e) => {
    e.preventDefault();
    const filteredProductsItem = details.filter((currentProduct) => {

      if (area !== undefined && area !== "") {
        return currentProduct.area === area;
      }else {
        return currentProduct;
      }
    });

    setDetails(filteredProductsItem);
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
      <h2 className="doctorlist"> Medical Stores</h2>
      <div style={{ width: "90%", margin: " auto" }} >
        <div className="row m-3"  >
          {
            details.length > 0 ?
          details.map((item, index) => (
            <>
              <div class="col-sm-4 my-2 ">
                <div class="card bg-light doctorcard" style={{ borderRadius: "2%", marginLeft: "10px", marginTop: "10px", minHeight: "145px" }} >
                  <div class="card-body" >
                    <h4 class="card-title mb-3"> {item.name}</h4>
                    <p class="card-text">
                      <b>Address :</b> {item.address},<br></br> {item.area}, {item.city} <br></br>
                      <b>Contact No. :</b> +91 {item.contact_no}<br></br>
                      <button type="submit" className="btn btn-primary app mt-3" >
                        <a href={item.location} target="_blank"> Open in Map</a>
                        {/* </Link> */}
                      </button>

                    </p>

                  </div>
                </div>
              </div>
            </>
            ))
            : '' }
              {
              details.length < 0 ?
              <h4 className="alertTitle">Medicals Not Available... Please contact admin</h4> : ''
        }
        </div>
      </div>
    </>
  );

}

export default Medicals;
