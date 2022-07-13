import React from "react";
import { Icon } from "@iconify/react";
import { ListGroup, Row, Col } from "react-bootstrap";
import "./TodoList.scss";
export default function TodoList({ remove, title, handleChange, done }) {
  return (
    <ListGroup.Item className="listItem">
      <Row>
        <Col>
          <span id="checkbox">
            <input
              id="checkbox-element"
              type="checkbox"
              onChange={handleChange}
              className={done ? "checked" : "no"}
            />
            <Icon className="icon-check" icon="mdi:check" />
          </span>
        
        </Col>
        <Col md={9} xs={6} className={done ? "doneTrue" : "false"}>
          {title}
        </Col>
        <Col className="col">
          <button onClick={remove} className="button-trash">
          <Icon icon="ci:trash-empty" className="trash" />
          </button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
