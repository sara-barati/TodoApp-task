import React from "react";
import { Form, Button } from "react-bootstrap";
import "./TodoForm.scss"

export default function TodoForm({ handlechange, handlesubmit, Value }) {
  return (
    <Form className="container1">
      <Form.Control
        onChange={handlechange}
        value={Value}
        className="form mt-sm-3 mt-md-8"
        type="text"
        size="sm"
        placeholder="Type here..."
      />
      <Button onClick={handlesubmit} className="button mt-sm-3 mt-md-8" variant="light">
        Add
      </Button>
    </Form>
  );
}
