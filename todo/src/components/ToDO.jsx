import {
  LIST_NAME,
  PROIRITY
} from "../const";

import ToDoItem from "./ToDoItem";

function ToDO() {
  return (
    <div>
      <h1 className="sr-only">To do</h1>

      <div className="to-do">
        <ToDoItem
          taskPriority={PROIRITY.HIGH}
          todoItemName={LIST_NAME.HIGH}
        />

        <ToDoItem
          taskPriority={PROIRITY.LOW}
          todoItemName={LIST_NAME.LOW}
        />
      </div>
    </div>
  )
}

export default ToDO;
