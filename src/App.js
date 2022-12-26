import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-4">Contact Page</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control placeholder="Search Contact" />
          </InputGroup>
        </Form>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Luke</td>
              <td>Sky</td>
              <td>email@gmail.com</td>
              <td>123-223-4424</td>
            </tr>
          </tbody>

          {/* <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody> */}
        </Table>
      </Container>
    </div>
  );
}

export default App;
