import React from "react";
import { ListGroup, Row, Col } from "react-bootstrap";
export default function TodoList({ remove, title }) {

  return (
    <ListGroup.Item>
        <Row>  
      
       
 
      
      <Col xs={1} style={{ textDecoration:" line-through"}} ><input   type="checkbox" /></Col>
      <Col xs={10} style={{ textDecoration:" line-through"}} > {title}</Col>
      <Col xs={1}> <button onClick={remove}> <span className="icon-trash"> </span></button></Col>
    </Row>
      </ListGroup.Item>
      
  );
}
