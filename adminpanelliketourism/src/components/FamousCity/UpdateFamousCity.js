import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/sass/updatefamouscity.scss";

import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateFamousCity(props) {
  const { id } = useParams();

  const [name, setName] = useState();
  const [img, setImg] = useState();

  const [newName, setNewName] = useState();
  const [newİmg, setNewImg] = useState();

  function initPromise() {
    const response = axios.get(`/api/FamousCity/GetById/${id}`);
    return new Promise(function (res, rej) {
      res(response);
    });
  }

  async function update(e) {
    e.preventDefault();
    await axios
      .put(
        `/api/FamousCity/Edit/${id}`,
        {
          Id: id,
          Name: newName,
          Image: newİmg,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        Swal.fire(newName, "Updated", "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Xəta baş verdi",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      });
  }

  useEffect(() => {
    initPromise()
      .then(function (result) {
      
        return result.data;
      })
      .then(function (result) {
        setName(result.name); 
        setImg(result.image);
      });
  });

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
    });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setNewImg(result);
    });
  }
  return (
    <div className="container">
      <div className="images">
        <img
          className="viewimg mb-3"
          src={`data:image/jpeg;base64,${img}`}
          alt=""
        />
      </div>
      <Form onSubmit={(e) => update(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Event Name"
            onChange={(e) => setNewName(e.target.value)}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => base64Img(e.target.files[0])}
            defaultValue={img}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UpdateFamousCity;
