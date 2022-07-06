import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doctors from "./Components/Doctors/Doctors";
import DoctorProfile from "./Components/Doctors/DoctorProfile";
// import Appointment from "./Components/Appointment";
import Appointments from "./Components/DoctorAppointment";
import Medicals from "./Components/Medicals/Medicals";
import Blood from "./Components/BloodBanks/BloodBanks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
          <Route path="/medicals" element={<Medicals />} />
          <Route path="/appointments/:name" element={<Appointments />} />
          <Route path="/bloodbanks" element={<Blood />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
