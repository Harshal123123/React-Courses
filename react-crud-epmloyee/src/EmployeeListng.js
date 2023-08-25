import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

const EmployeeListng = () => {
  const [empData, setEmpData] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const navigate = useNavigate();

  const loadDetails = (id) => {
    navigate("/employee/detail/" + id);
  };
  const loadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };
  const removeDetail = (id) => {
    if (window.confirm("Do you want to remove")) {
      fetch("http://localhost:8000/employee/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed Successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err.message));
    }
  };

  let filteredData =
    empData &&
    empData.filter((item) => {
      return (
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (selectedFilter === "All" ||
          (selectedFilter === "isActive" && item.isActive) ||
          (selectedFilter === "Inactive" && !item.isActive))
      );
    });

  const handleFilter = (value) => {
    setSelectedFilter(value);
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setEmpData(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          style={{
            marginLeft: "69%",
            marginBottom: "1%",
            border: "1px solid gray",
            display: "inline-block",
            padding: "10px 20px",
            borderRadius:
              "10px" /* Adjust this value to change the roundness */,
            cursor: "pointer",
          }}
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Name"
        ></input>
        <div>
          <select
            style={{
              border: "1px solid gray",
              padding: "10px 20px",
              borderRadius:
                "10px" /* Adjust this value to change the roundness */,
              cursor: "pointer",
            }}
            value={selectedFilter}
            onChange={(e) => handleFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="isActive">IsActive</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="container">
        <div className="card">
          <div className="divbtn" style={{ textAlign: "right", margin: "5px" }}>
            <Link to="employee/create" className="btn btn-success">
              Add New (+)
            </Link>
          </div>
          <div className="card-title">
            <h2>Employee Listng</h2>
          </div>
          <div className="card-body">
            <tabel className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData &&
                  filteredData.map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>
                        <a
                          onClick={() => loadEdit(item.id)}
                          className="btn btn-success"
                        >
                          Edit
                        </a>
                        <a
                          onClick={() => removeDetail(item.id)}
                          className="btn btn-danger"
                        >
                          Remove
                        </a>
                        <a
                          onClick={() => loadDetails(item.id)}
                          className="btn btn-primary"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </tabel>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeListng;
