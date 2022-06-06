import {
  useState
} from "react";

import Form from "./Form";
import List from "./List";

function ToDoItem(props) {
  const taskListStorage = props.taskList;
  const [tasksList, setTasksList] = useState([]);

  const handleSubmit = function (taskName) {
    taskListStorage.addTask(taskName);
    setTasksList(taskListStorage.list);
    console.log(taskListStorage.list);
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