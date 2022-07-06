import React from "react";
import { useState, useEffect } from "react";
import Nav from './Nav';
import Sidebar from "./Sidebar";

const Home = () => {

    const [ cDoctor, setCdoctor] = useState(0);
    const [ cMedical, setCmedical] = useState(0);
    const [ cBloodBank, setCbloodBank] = useState(0);


    useEffect(() => {
        getAll();
    }, []);

    const getAll = async () => {

        let result1 = await fetch('http://localhost:5000/doctors');
        result1 = await result1.json();
        setCdoctor(result1.length);

        let result2 = await fetch('http://localhost:5000/medicals');
        result2 = await result2.json();
        setCmedical(result2.length);

        let result3 = await fetch('http://localhost:5000/blood-banks');
        result3 = await result3.json();
        setCbloodBank(result3.length);
    }

    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">
                        <div className="homeDiv">
                            <div className="box">
                                <p className="count">{cDoctor}</p>
                                <p>Doctors</p>
                            </div>

                            <div className="box">
                                <p className="count">{cMedical}</p>
                                <p>Medicals Stores</p>
                            </div>

                            <div className="box">
                                <p className="count">{cBloodBank}</p>
                                <p>Blood Banks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home; 