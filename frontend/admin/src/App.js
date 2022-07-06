import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Home from './Components/Home';
import Doctors from './Components/Doctors/Doctors';
import AddDoctor from './Components/Doctors/AddDoctor';
import UpdateDoctor from './Components/Doctors/UpdateDoctor';
import Medicals from './Components/MedicalStroes/Medicals';
import AddMedicals from './Components/MedicalStroes/AddMedical';
import UpdateMedical from './Components/MedicalStroes/UpdateMedical';
import BloodBank from './Components/BloodBank/BloodBank';
import AddBloodBank from './Components/BloodBank/AddBloodBank';
import UpdateBloodBank from './Components/BloodBank/UpdateBloodBank';
import Appointments from './Components/Appointments/Appointments';
import Queries from './Components/Queries/Queries';

function App() {
  return (
    <>
      <Router>

        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/" element={<Home />} />

            <Route path="/doctors" element={<Doctors />} />
            <Route path="/add-doctor" element={<AddDoctor />} />
            <Route path="/update-doctor/:id" element={<UpdateDoctor />} />

            <Route path="/medicals" element={<Medicals />} />
            <Route path="/add-medical" element={<AddMedicals />} />
            <Route path="/update-medical/:id" element={<UpdateMedical />} />

            <Route path="/blood-banks" element={<BloodBank />} />
            <Route path="/add-blood-bank" element={<AddBloodBank />} />
            <Route path="/update-blood-bank/:id" element={<UpdateBloodBank />} />

            <Route path="/appointments" element={<Appointments />} />

            <Route path="/queries" element={<Queries />} />

            <Route path="/logout" element={<h1>Logout Component</h1>} />
            {/* <Route path="/profile" element={<h1>Profile Component</h1>} /> */}
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;
