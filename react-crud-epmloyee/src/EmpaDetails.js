import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const EmpaDetails = () => {
  const { empid } = useParams();
  const [empData, setEmpData] = useState({});
  console.log(empid);

  useEffect(() => {
    fetch(`http://localhost:8000/employee/${empid}`)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [empid]);

  return (
    <div>
      <div className="card" style={{ textAlign: "left" }}>
        <div className="card-title">
          <h2>Employee Create</h2>
        </div>
        <div className="card-body"></div>
        {empData && (
          <div>
            <h2>
              The Employee name is: <b>{empData.name}</b> and Emp id is:{" "}
              {empData.id}
            </h2>
            <h3>Contact Details</h3>
            <h5>Email is: {empData.email}</h5>
            <h5>Phone is: {empData.phone}</h5>
            <Link className="btn btn-danger" to="/">
              Back to Listing
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
