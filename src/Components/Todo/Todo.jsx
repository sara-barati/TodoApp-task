import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { Container, Row, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "./Todo.scss";
export default function Todo() {
  const [list, setList] = useState([]);
  const [texInput, setTextInput] = useState({});
  const handleChande = (e) => {
    const valueinput = e.target.value;
    setTextInput({
      value: valueinput,
      done: false,
      id: Math.floor(Math.random() * 1000),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (texInput.value) {
      setList([texInput, ...list]);
      setTextInput({ value: "", id: "", done: "" });
    }
  };

  const removeTodo = (item) => {
    const newlist = list.filter((i) => i.value !== item.value);
    setList(newlist);
  };
  console.log(list);
  const handleChangeCheckbox = (itemlist) => {
    const newTodoList = list.map((item) => {
      if (item.id === itemlist.id) {
        return { ...item, done: !item.done };
      }

      return item;
    });
    setList(newTodoList);
    console.log(list);
  };
  return (
    <Container className="container">
      <TodoForm
        handlechange={handleChande}
        handlesubmit={handleSubmit}
        Value={texInput.value}
      />

      <ListGroup>
        {list.map((item) => (
          <TodoList
            done={item.done}
            key={item.id}
            title={item.value}
            remove={() => removeTodo(item)}
            handleChange={()=>handleChangeCheckbox(item)}
          />
        ))}
      </ListGroup>
    </Container>
  );
}
