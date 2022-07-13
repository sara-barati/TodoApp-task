import React from "react";
import "./TodoList.scss";
import { Icon } from '@iconify/react';
import { ListGroup, Row, Col } from "react-bootstrap";
export default function TodoList({ remove, title, handleChange, done }) {
  return (
    <ListGroup.Item>
      <Row>
        <Col xs={1}>
        <span id="checkbox">
  <input id="checkbox-element" type="checkbox" onChange={handleChange}/>  
   {/* <span className="icon-check" /> */}

   <Icon className="icon-check" icon="mdi:check" />
</span>
          {/* <input type="checkbox" onChange={handleChange}> <span className="icon-check"/></input> */}
  
        </Col>
        <Col xs={10} className={done ? "doneTrue" : "false"}>
          {title}
        </Col>
        <Col xs={1}>
          <button onClick={remove}>
            <span  className="icon-trash"> </span>
          </button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
