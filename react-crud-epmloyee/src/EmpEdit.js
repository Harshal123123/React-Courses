import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
  const navigate = useNavigate();
  const { empid } = useParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setId(res.id);
        setName(res.name);
        setEmail(res.email);
        setPhone(res.phone);
        setIsActive(res.isActive);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // We need to generate ID dynamically.
    const empData = { id, name, email, phone, isActive };
    // console.log(JSON.stringify(empData));

    fetch("http://localhost:8000/employee/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empData),
    })
      .then((res) => {
        alert("Saved Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card">
              <div className="card-title">
                <h2>Employee Edit</h2>
              </div>
              <div className="card-body" style={{ textAlign: "left" }}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      ></input>
                      {/* {name.length === 0 && (
                        <span className="text-danger">Enter the name</span>
                      )} */}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Phone</label>
                      <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        checked={isActive}
                        onChange={(e) => setIsActive(e.target.checked)}
                        type="checkbox"
                        className="form-check-input"
                      ></input>
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button type="submit" className="btn btn-success">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpEdit;
