import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
function ToDoItem(props) {
  const { task, completed, index, handleCheck, handleDelete } = props;
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(completed);
  }, [completed]);

  return (
    <>
      <Row className="todo-item">
        <Col className="checkbox-col">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
              handleCheck(e, index);
            }}
          />
        </Col>
        <Col className="task-col">
          <span className={completed ? "task-complete" : ""}>{task}</span>
        </Col>
        <Col className="delete-col">
          <Button
            style={{ border: "none" }}
            onClick={() => handleDelete(index)}
          >
            <BsTrash style={{ fontSize: "20px" }} />
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default ToDoItem;
