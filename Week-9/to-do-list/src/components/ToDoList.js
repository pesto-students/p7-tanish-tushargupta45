import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  const { items, setItems } = props;
  const itemsCopy = JSON.parse(JSON.stringify(items));

  const handleCheck = (e, index) => {
    itemsCopy[index]["completed"] = e.target.checked;
    setItems(itemsCopy);
  };
  const handleDelete = (index) => {
    itemsCopy.splice(index, 1);
    setItems(itemsCopy);
  };
  return (
    <>
      <ul className="item-list">
        {items.map((item, index) => {
          return (
            <li className="item" key={index}>
              <ToDoItem
                task={item.task}
                completed={item.completed}
                index={index}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ToDoList;
