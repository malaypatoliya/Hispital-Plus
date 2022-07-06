function About() {
  return (
    <>
      <div className="container-fluid " style={{ width: "70%" }}>
        <div className="row mt-5 mission">
          <h2 className="mt-4" style={{ color: "#0CB8B6" }}>
            Our Mission
          </h2>

          <div
            className="col-md-6 col-sm-12 mt-4"
            style={{
              border: "4px solid #0CB8B6",
              borderRadius: "3%",
              height: "40vh",
            }}
          >
            <p className="mt-5">
              <p>Our mission is to provide a useful information about Doctors, Hospitals, Medical Stroes and Blood Banks</p>
              <p>Also provide a internal details of Hospitals(like ICU or Bed available?) and Blood Banks(Which group of Blood is available?)</p>
            </p>
          </div>
          <div className="col-md-6 col-sm-12 mt-4">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="https://th.bing.com/th/id/OIP.0t0FDlM42Y6gb-eK9svf0gHaEK?w=310&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
                    class="d-block w-100 ac"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="https://previews.123rf.com/images/vectorfusionart/vectorfusionart1704/vectorfusionart170410157/76863308-digital-composite-of-doctor-mid-section-with-clipboard-against-mission-doodles-and-blue-background.jpg"
                    class="d-block w-100 ac"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
