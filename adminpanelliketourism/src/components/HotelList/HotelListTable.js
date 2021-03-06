import { Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import "../../assets/sass/hotellisttable.scss";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Link } from "react-router-dom";

function HotelListTable() {
  let count = 0;

  const [hotel, setHotels] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    debugger;
    const results = await axios.get(
      `https://localhost:44363/api/HotelList/GetAll/${id}`
    );
    setHotels(results.data);
  };
  const deleteHotels = async (id) => {
    await axios.delete(`https://localhost:44363/api/HotelList/Delete/${id}`);
    loadHotels();
  };
  const updateCities = async (id) => {
    console.log(id);
  };
  //   const updateCities = async id => {
  //    console.log(id);
  //   };

  return (
    <div className="tables">
      <Link to="/HotelCreate" className="btn btn-success btn-fw link">
        Create Hotel
      </Link>
      <Link to="/FamousCityTable" className="btn btn-danger btn-fw link">
        Go To back
      </Link>

      <h3>HotelList</h3>

      <Table striped bordered hover variant="dark">
        <thead className="thead">
          <tr>
            <th className="ths">#</th>
            {/* <th>Image</th> */}
            <th>Name</th>
            <th>Dictance</th>
            <th>Star</th>

            <th>Desc</th>
            <th>Rating</th>
            <th>RatingTitle</th>
            <th>Prise</th>

            <th>FamousCityId</th>
            <th>Settings</th>
          </tr>
        </thead>
        <tbody className="tbodies">
          {hotel.map((hotels) => (
            <tr className="trs">
              <td className="tds">{++count}</td>

              {/* <td>
                <img
                  className="images"
                  src={`data:image/jpeg;base64,${hotels.image}`}
                  alt=""
                />
              </td> */}
              <td>
                <div className="cityname">{hotels.name}</div>
              </td>
              <td>
                <div className="cityname">{hotels.distance}</div>
              </td>

              <td>
                <div className="cityname">{hotels.star}</div>
              </td>

              <td>
                <div className="cityname">{hotels?.desc.substring(0, 13)}</div>
              </td>

              <td>
                <div className="cityname">{hotels.rating}</div>
              </td>

              <td>
                <div className="cityname">{hotels.ratingTitle}</div>
              </td>

              <td>
                <div className="cityname">{hotels.prise}</div>
              </td>

              <td>
                <div className="cityname">{hotels.famousCityId}</div>
              </td>

              <td>
                <Link to={`/hotellistupdate/${hotels.id}`}>
                  <button
                    onClick={() => updateCities(hotels.id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </Link>

                <button
                  onClick={() => deleteHotels(hotels.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>

                <Link to={`/hotelrouter/${hotels.id}`}>
                  <button className="btn btn-primary">Detail</button>
                </Link>
              </td>
              {/* 
              <td>
                <div className="buttons px-1">
                  <Link to={`/updatefamouscity/${hotels.id}`}>
                    <button
                      onClick={() => updateCities(citiess.id)}
                      className="btn btn-primary"
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
                </div>
              </td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default HotelListTable;
