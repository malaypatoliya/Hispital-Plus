import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const collectData = async () => {
    const result = await fetch("http://localhost:5000/queries", {
      method: "post",
      body: JSON.stringify({ name, email, msg, }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <>
      {/* carosoul */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-5 cdiv"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?cs=srgb&dl=pexels-pixabay-40568.jpg&fm=jpg"
              className="d-block cimg "
              alt="..."
            />
            <div className="carousel-caption firstc">
              <p style={{ color: "#0CB8B6" }} className="firstc">
                Growing to meet your needs !!
              </p>
              
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.businessinsider.in/photo/69795001/how-to-become-a-doctor.jpg?imgsize=137197"
              className="d-block cimg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.squarespace-cdn.com/content/v1/58361d02ff7c50058bae611c/1575305033447-RTVSR8O7OJOZ27XV6634/42257703_l.jpg?format=1500w"
              className="d-block cimg"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{ color: "black" }}>Growing to meet your needs!!</h1>
            
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section
        className="text-center my-5 py-5"
        style={{ backgroundColor: "#0CB8B6" }}
      >
        <div className="container">
          <h1 style={{ fontSize: "25px" }}>
            Searching for a doctor or a nearby medical store?
          </h1>
          <p>
            <button type="button" className="btn btn-dark finddr mx-3 mt-3 ">
              <i className="fas fa-user-md mx-2"></i>{" "}
              <Link to={"/doctors"}>Find Doctor</Link>
            </button>
            <button type="button" className="btn btn-dark mx-3 mt-3">
              <i className="fas fa-briefcase-medical mx-2"></i>
              <Link to={"/medicals"}>Find Medical Store</Link>
            </button>
            <button type="button" className="btn btn-dark mx-3 mt-3">
            <i class="fas fa-building mx-2"></i>
              <Link to={"/bloodbanks"}>Blood Bank</Link>
            </button>
          </p>
        </div>
      </section>

      <div id="faqs" class="container">
        <div class="row mb-4">
          <div class="col-9 mx-auto py-5 mb-3">
            <h4 class="text-center mt-2 mb-4 display-6">FAQs</h4>

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What are the benifits of using our website?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    By using our website you will be able to find the doctor of
                    required specialization (such as dentist , surgeon etc) and
                    in the area of your choice. If there will be any doctor
                    available in that area that you have searched for it will be
                    displayed on your screen. You won't need to visit different
                    websites searhing for all the doctors. You can also search
                    for the medical store in the particular area..
                  </div>
                </div>
              </div>
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How to fill Appointment form?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    Yes , You need to Login in to our website before booking the
                    Appointment. Once you are logged in into our website then
                    only you will be able to see the Appointmnet Letter
                  </div>
                </div>
              </div>
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How do our website work or how you can search in our
                    website?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    It's quite easy to work with our website. If you want to
                    search for the doctor then you need to click on Find Doctor
                    button or you can click on doctor's list in Naigation Bar.
                    Then you need to select the area or specializtion of the
                    doctor and you will get the list of the doctors in that area
                    or of that specialization. Some goes with the medical list!!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-dark text-white p-5">
        <div class="container">
          <div class="row justify-content-evenly py-3">
            <div class="col-md-3 col-10 mt-5 mb-3 ">
              <i className="fas fa-heartbeat fa-2x"></i>{" "}
              <span className="fs-3">Hoapital+</span>
              <div class="container-fluid">
                <p class="text-center pt-2">
                  Designed by Hospital+ Team
                </p>
              </div>
            </div>
            <div class="col-md-3 col-10 mt-5">
              <h5 class="pb-2">Links</h5>
              <p class="link">
                <a>
                  <Link to={"/"}>Home</Link>
                </a>
                <br />
                <a>
                  <Link to={"/doctors"}>Doctor</Link>
                </a>
                <br />
                <a>
                  <Link to={"/medicals"}>Medical Store</Link>
                </a>
                <br />
                <a>
                  <Link to={"/bloodbanks"}>Blood Bank</Link>
                </a>
                <br />
              </p>
            </div>
            <div class="col-md-3 col-10">
              <h5 class="pb-2">Have any queries? Contact us!!</h5>
              <p>
                <form class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label">Email-id</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="form-control"
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="form-label">Message</label>

                    <input
                      type="textarea"
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      class="form-control"
                      style={{ height: "50px" }}
                      required
                    />
                  </div>

                  <div class="col-12">
                    <button
                      class="btn btn-primary sendBtn"
                      onClick={collectData}
                      type="submit"
                    >
                      Send Msg
                    </button>
                  </div>
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
