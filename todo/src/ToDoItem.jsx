import {
  useState
} from "react";

import Form from "./Form";
import List from "./List";
import TasksList from "./TasksList";
const tasksStorage = new TasksList();

function ToDoItem(props) {
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = function (taskName) {
    const newTasksList = tasksList.slice();
    newTasksList.push(taskName);
    setTasksList(newTasksList);
  }

  const handleDeleteButton = function (taskID) {
    const newTasksList = tasksList.filter((task, index) => taskID !== index);
    setTasksList(newTasksList);
  }

  return (
    <div className="to-do__item">
      <Form
        handleSubmit={handleSubmit}
        todoItemName={props.todoItemName}
      />

      <List
        tasksList={tasksList}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  )
}

export default ToDoItem;