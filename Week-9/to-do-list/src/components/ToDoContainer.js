import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Header from "./Header";
import ToDoList from "./ToDoList";

const initialData = [
  {
    task: "Brainstorm startup ideas",
    completed: false,
  },
  {
    task: "Update SVGs in the website",
    completed: false,
  },
];

function ToDoContainer() {
  const [items, setItems] = useState(initialData);
  const [text, setText] = useState("");

  const handleAddClick = () => {
    const newItem = {
      task: text,
      completed: false,
    };
    setItems([...items, newItem]);
    setText("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container">
        <Row className="container-heading">
          <h1>ToDo List</h1>
        </Row>
        <Row className="container-input">
          <Col>
            <input type="text" value={text} onChange={handleTextChange} />
          </Col>
          <Col>
            <Button
              className={`add-button ${
                text.length ? "" : "add-button-disabled"
              }`}
              onClick={handleAddClick}
              disabled={text.length ? false : true}
            >
              Add
            </Button>
          </Col>
        </Row>
        <ToDoList items={items} setItems={setItems} />
      </div>
    </>
  );
}
export default ToDoContainer;
