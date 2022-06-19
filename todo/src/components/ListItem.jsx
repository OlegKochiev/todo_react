
function ListItem({ id, task, priority, status }) {
  const handleDeleteTask = function () {
    // handleDeleteButton(id);
  }

  return (
    <li
      className="list__item"
      id={id}>

      <label
        className="to-do__checkbox-wrapper">

        <input
          type="checkbox"
          checked={status}
          className="to-do__task-checkbox">
        </input>

        <span></span>
      </label>

      <p
        className="to-do__task-desc">
        {task}
      </p>

      <button
        type="button"
        className="to-do__del-btn"
        onClick={handleDeleteTask}>
      </button>
    </li>
  )
}

export default ListItem; 