import React, { useState, useEffect } from "react";
import Nav from '../Nav';
import Sidebar from "../Sidebar";

const Queries = () => {

    const [queries, setQueries] = useState([]);

    useEffect(() => {
        getQueries();
    }, []);

    const getQueries = async () => {
        let result = await fetch('http://localhost:5000/queries');
        result = await result.json();
        setQueries(result);
    }


    return (
        <>
            <Nav />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <div className="ContentDiv">

                        <h2 className="headingTitle">Queries</h2>
                        {
                            queries.length > 0 ? <table className="mytable scroll">
                                <thead>
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Name</th>
                                        <th>Email ID</th>
                                        <th>Query</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        queries.map((query, index) => (
                                            <tr key={query._id}>
                                                <td>{index + 1}</td>
                                                <td>{query.name}</td>
                                                <td>{query.email}</td>
                                                <td>{query.msg}</td>
                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table> : <h5 className="err">No Queries Reamins !!!</h5>
                        }
                    </div>
                </div>
            </div>



        </>
    );
}

export default Queries;
