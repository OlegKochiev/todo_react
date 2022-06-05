import { useState } from "react";
import Form from "./Form";
import List from "./List";

function ToDoItem(props) {
  return (
    <div className="to-do__item">
      <Form />
      <List />
    </div>
  )
}

export default ToDoItem;