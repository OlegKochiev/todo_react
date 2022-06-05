import {
  useState
} from "react";

import Form from "./Form";
import List from "./List";

function ToDoItem(props) {
  const taskListStorage = props.taskList;
  const [taskName, setTaskName] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleChange = function (taskName) {
    setTaskName(taskName);
  };

  const handleSubmit = function (task) {
    taskListStorage.addTask(taskName);
    setTasksList(taskListStorage.list)
  }

  return (
    <div className="to-do__item">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todoItemName={props.todoItemName}
      />
      <List
        tasksList={tasksList}
      />
    </div>
  )
}

export default ToDoItem;