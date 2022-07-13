import React from "react";
import { Icon } from "@iconify/react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./TodoList.scss";
export default function TodoList({ remove, title, handleChange, done }) {
  return (
    <ListGroup.Item className="listItem">
      <Row>
        <Col xs={1}>
          <span id="checkbox">
            <input
              id="checkbox-element"
              type="checkbox"
              onChange={handleChange}
            />
            <Icon className="icon-check" icon="mdi:check" />
          </span>
        
        </Col>
        <Col xs={10} className={done ? "doneTrue" : "false"}>
          {title}
        </Col>
        <Col xs={1} className="col">
          <button onClick={remove} className="button-trash">
          <Icon icon="ci:trash-empty" className="trash" />
          </button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
