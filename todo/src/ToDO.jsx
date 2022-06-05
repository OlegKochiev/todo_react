import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDO() {

  return (
    <div>
      <h1 className="sr-only">To do</h1>
      <div className="to-do">
        <ToDoItem />
        <ToDoItem />
      </div>
    </div>
  )
}

export default ToDO;
