import {
  useState
} from "react";

import {
  LIST_NAME
} from "./const";

import TasksList from "./TasksList";
import ToDoItem from "./ToDoItem";

function ToDO() {
  const tasksListHigh = new TasksList();
  const tasksListLow = new TasksList();

  return (
    <div>
      <h1 className="sr-only">To do</h1>
      <div className="to-do">
        <ToDoItem
          todoItemName={LIST_NAME.HIGH}
          taskList={tasksListHigh}
        />
        <ToDoItem
          todoItemName={LIST_NAME.LOW}
          taskList={tasksListLow}
        />
      </div>
    </div>
  )
}

export default ToDO;
