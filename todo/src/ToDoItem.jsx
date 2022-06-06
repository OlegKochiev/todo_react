import {
  useState
} from "react";

import Form from "./Form";
import List from "./List";

function ToDoItem(props) {
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = function (taskName) {
    const newTasksList = tasksList.slice();
    newTasksList.push(taskName);
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
      />
    </div>
  )
}

export default ToDoItem;