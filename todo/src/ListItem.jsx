
function ListItem({ handleDeleteButton, taskIndex, taskName, taskID }) {
  const handleDeleteButtonForm = function (e) {
    handleDeleteButton(taskID);
  }

  return (
    <li
      className="list__item"
      id={taskIndex}>

      <label
        className="to-do__checkbox-wrapper">

        <input
          type="checkbox"
          className="to-do__task-checkbox">
        </input>

        <span></span>
      </label>

      <p
        className="to-do__task-desc">
        {taskName}
      </p>

      <button
        type="button"
        className="to-do__del-btn"
        onClick={handleDeleteButtonForm}>
      </button>
    </li>
  )
}

export default ListItem; 