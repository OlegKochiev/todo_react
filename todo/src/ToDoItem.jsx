import {
  useState
} from "react";

import Form from "./Form";
import List from "./List";

function ToDoItem(props) {

  const [taskName, setTaskName] = useState('');

  const handleChange = function (taskName) {
    setTaskName(taskName);
  };

  const handleSubmit = function (task) {
    console.log(taskName);
  }

  return (
    <div className="to-do__item">
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        todoItemName={props.todoItemName}
      />
      <List />
    </div>
  )
}

export default ToDoItem;