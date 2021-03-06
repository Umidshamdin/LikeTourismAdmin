import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function CreateFamousCity() {
  const [img, setImg] = useState();
  const [name, setName] = useState();

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () =>
        resolve(reader.result.replace("data:", "").replace(/^.+,/, ""));
      reader.onerror = (error) => reject(error);
    });
  }
  // window.location.reload();
  async function Create(e) {
    e.preventDefault();
    await axios
      .post(
        "https://localhost:44363/api/FamousCity/Create",
        {
          Name: name,
          Image: img,
        },
        { "Content-Type": "multipart/form-data" }
      )
     
      .then(function (response) {
        Swal.fire(name, "Şəhər əlavə edildi", "success");
      })
      .catch(function (error) {
        Swal.fire({
          icon: "error",
          title: "",
          text: "Xəta baş verdi",       
        });
      });
  }

  function base64Img(file) {
    var base64String = getBase64(file);
    base64String.then(function (result) {
      setImg(result);
    });
  }

  return (
    <div className="container">
      <Form onSubmit={(e) => Create(e)}>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Enter City Image"
            onChange={(e) => base64Img(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>

      </Form>
    </div>
  );
}

export default CreateFamousCity;
