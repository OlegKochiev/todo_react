import Form from "./Form";
import List from "./List";

function ToDoItem({ todoItemName, taskPriority }) {

  return (
    <div className="to-do__item">
      <Form
        taskPriority={taskPriority}
        todoItemName={todoItemName}
      />

      <List
        priority={taskPriority}
      />
    </div>
  )
}

export default ToDoItem;