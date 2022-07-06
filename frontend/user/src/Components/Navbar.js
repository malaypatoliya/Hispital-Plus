import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <span className=" fs-3 fw-bold">
            <i className="fas fa-heartbeat fax logo logoicon"></i>{" "}
            <span className="logo logotext">HOSPITAL +</span>
          </span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <span class="navbar-text">
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav me-auto mb-lg-0 ">
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Home
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/About" style={{ textDecoration: "none" }}>
                    About Us
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/doctors" style={{ textDecoration: "none" }}>
                    Doctor's Info
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/medicals" style={{ textDecoration: "none" }}>
                    Medical Stores
                  </Link>
                </li>
                <li class="nav-item fs-5 mx-2 py-1 px-2">
                  <Link to="/bloodbanks" style={{ textDecoration: "none" }}>
                    Blood Bank
                  </Link>
                </li>
              </ul>
            </div>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
