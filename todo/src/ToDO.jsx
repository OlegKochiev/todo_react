import {
  LIST_NAME
} from "./const";

import ToDoItem from "./ToDoItem";

function ToDO() {
  return (
    <div>
      <h1 className="sr-only">To do</h1>

      <div className="to-do">
        <ToDoItem
          todoItemName={LIST_NAME.HIGH}
        />

        <ToDoItem
          todoItemName={LIST_NAME.LOW}
        />
      </div>
    </div>
  )
}

export default ToDO;
