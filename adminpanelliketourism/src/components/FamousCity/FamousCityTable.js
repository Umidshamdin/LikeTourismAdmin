import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../assets/sass/famouscitytable.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function FamousCityTable() {
  let count = 0;

  const [city, setCities] = useState([]);

  useEffect(() => {
    loadCities();
  }, []);

  const loadCities = async () => {
    const results = await axios.get(
      "https://localhost:44363/api/FamousCity/GetAll"
    );
    setCities(results.data);
  };

  const deleteCities = async (id) => {
    await axios.delete(`https://localhost:44363/api/FamousCity/Delete/${id}`);
    loadCities();
  };

  const updateCities = async (id) => {
    
  };

  return (
    <div className="tables">
      <Link to="/CreateFamousCity" className="btn btn-success btn-fw link">
        Create City
      </Link>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr className="classtr">
            <th className="ths">#</th>
            <th>Image</th>
            <th>Name</th>
            <th>CityId</th>
            <th style={{width:"283px"}}>Settings</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {city.map((citiess) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${citiess.image}`}
                  alt=""
                />
              </td>

              <td>
                <div className="cityname">{citiess.name}</div>
              </td>

              <td>
                <div className="cityname">{citiess.id}</div>
              </td>

              <td>
                <div className="buttons px-1">
                  <Link to={`/updatefamouscity/${citiess.id}`}>
                    <button
                      onClick={() => updateCities(citiess.id)}
                      className="btn btn-warning"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => deleteCities(citiess.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <div className="hotelss">
                    <Link to={`/hotellisttable/${citiess.id}`}>
                      <button className="btn btn-primary hotelsto">
                        Go To Hotels
                      </button>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default FamousCityTable;
