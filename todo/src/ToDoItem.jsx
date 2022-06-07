import {
  useState
} from "react";

import Form from "./Form";
import List from "./List";

function ToDoItem({ todoItemName }) {
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = function (taskName) {
    setTasksList([...tasksList, taskName]);
  }

  const handleDeleteButton = function (taskID) {
    const newTasksList = tasksList.filter((task, index) => taskID !== index);
    setTasksList(newTasksList);
  }

  return (
    <div className="to-do__item">
      <Form
        handleSubmit={handleSubmit}
        todoItemName={todoItemName}
      />

      <List
        tasksList={tasksList}
        handleDeleteButton={handleDeleteButton}
      />
    </div>
  )
}

export default ToDoItem;