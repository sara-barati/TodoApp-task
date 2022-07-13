import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import { Container, Row, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Todo.scss";
export default function Todo() {


    //set list from local storage:

  const [list, setList] = useState(() => {
    const savedTodos = localStorage.getItem("list");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  

  const [texInput, setTextInput] = useState({});

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
        className="form"
        handlechange={handleChande}
        handlesubmit={handleSubmit}
        Value={texInput.value}
      />

      <ListGroup className="list">
        {list.map((item) => (
          <TodoList
            done={item.done}
            key={item.id}
            title={item.value}
            remove={() => removeTodo(item)}
            handleChange={() => handleChangeCheckbox(item)}
          />
        ))}
      </ListGroup>
    </Container>
  );
}
