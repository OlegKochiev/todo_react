import {
  useState
} from "react";

import ToDoItem from "./ToDoItem";

function ToDO() {
  return (
    <div>
      <h1 className="sr-only">To do</h1>
      <div className="to-do">
        <ToDoItem todoItemName={'High'} />
        <ToDoItem todoItemName={'Low'} />
      </div>
    </div>
  )
}

export default ToDO;
